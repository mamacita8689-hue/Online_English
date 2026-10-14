#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

printf '\n== Online English: offline pronunciation setup ==\n'
printf 'System Python: '
python --version || true

# Kokoro 0.9.x currently supports Python >=3.10,<3.13.
# Codespaces may expose Python 3.13 as `python`, so we deliberately build
# an isolated Python 3.12 environment only for audio generation.
if ! command -v uv >/dev/null 2>&1; then
  echo 'Installing uv locally (used only to provision Python 3.12)...'
  python -m pip install --user --upgrade uv
  export PATH="$HOME/.local/bin:$PATH"
fi

if ! command -v uv >/dev/null 2>&1; then
  echo 'ERROR: uv was installed but is not on PATH.' >&2
  echo 'Open a new terminal or add ~/.local/bin to PATH and run this script again.' >&2
  exit 1
fi

echo 'Installing system libraries required by phonemizer/audio...'
sudo apt-get update
sudo apt-get install -y espeak-ng libsndfile1

echo 'Provisioning Python 3.12 for Kokoro...'
uv python install 3.12

VENV="$ROOT_DIR/.venv-pronunciation"
if [[ ! -x "$VENV/bin/python" ]]; then
  uv venv --python 3.12 "$VENV"
fi

echo 'Installing pronunciation dependencies into .venv-pronunciation...'
uv pip install --python "$VENV/bin/python" -r tools/pronunciation-requirements.txt

echo
"$VENV/bin/python" - <<'PY'
import sys
print('Pronunciation Python:', sys.version.split()[0])
import kokoro
import soundfile
print('Kokoro and soundfile imports: OK')
PY

echo
echo 'Environment is ready.'
echo 'Generate the offline WAV pack with:'
echo '  .venv-pronunciation/bin/python tools/generate_pronunciation.py'
