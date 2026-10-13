import type { VisualId } from '@/content/reading/types';

type Props = { visual?: VisualId; emoji: string; label: string };

export default function WordPicture({ visual, emoji, label }: Props) {
  if (!visual) {
    return <div className="word-picture emoji-picture" aria-label={label}>{emoji}</div>;
  }

  const common = { viewBox: '0 0 180 120', role: 'img', 'aria-label': label } as const;

  switch (visual) {
    case 'apple':
      return <svg {...common} className="word-picture"><circle cx="90" cy="68" r="32" fill="#f56b63"/><path d="M90 36c2-14 10-22 22-25" fill="none" stroke="#486b3b" strokeWidth="6" strokeLinecap="round"/><ellipse cx="112" cy="25" rx="13" ry="7" fill="#74a85c" transform="rotate(-22 112 25)"/></svg>;
    case 'cat':
      return <svg {...common} className="word-picture"><path d="M55 44 68 24l12 18c7-3 14-3 21 0l12-18 12 21v30c0 20-15 34-35 34S55 95 55 75Z" fill="#f2b36f"/><circle cx="78" cy="67" r="4"/><circle cx="103" cy="67" r="4"/><path d="M89 73h5l-2 5z" fill="#7a5140"/><path d="M62 76 42 72m20 12-20 5m76-13 20-4m-20 12 20 6" stroke="#7a5140" strokeWidth="3" strokeLinecap="round"/></svg>;
    case 'pen':
      return <svg {...common} className="word-picture"><g transform="rotate(-25 90 60)"><rect x="78" y="20" width="24" height="72" rx="8" fill="#5d78d6"/><path d="M78 92h24L90 111Z" fill="#f0c99a"/><path d="M87 106h6l-3 7z" fill="#26334f"/><rect x="82" y="14" width="16" height="13" rx="4" fill="#8da3ee"/></g></svg>;
    case 'pig':
      return <svg {...common} className="word-picture"><ellipse cx="90" cy="67" rx="42" ry="34" fill="#f1a6b5"/><path d="M58 44 50 26l22 11m50 7 8-18-22 11" fill="#f1a6b5"/><circle cx="76" cy="59" r="4"/><circle cx="104" cy="59" r="4"/><ellipse cx="90" cy="76" rx="15" ry="10" fill="#e7869b"/><circle cx="85" cy="76" r="2.5"/><circle cx="95" cy="76" r="2.5"/></svg>;
    case 'dog':
      return <svg {...common} className="word-picture"><ellipse cx="90" cy="67" rx="37" ry="34" fill="#c58a58"/><ellipse cx="52" cy="55" rx="17" ry="28" fill="#8e5e3d" transform="rotate(15 52 55)"/><ellipse cx="128" cy="55" rx="17" ry="28" fill="#8e5e3d" transform="rotate(-15 128 55)"/><circle cx="76" cy="62" r="4"/><circle cx="104" cy="62" r="4"/><ellipse cx="90" cy="77" rx="9" ry="7" fill="#362a26"/><path d="M90 84c-4 7-10 8-15 4m15-4c4 7 10 8 15 4" fill="none" stroke="#362a26" strokeWidth="3" strokeLinecap="round"/></svg>;
    case 'sun':
      return <svg {...common} className="word-picture"><g stroke="#efb53d" strokeWidth="6" strokeLinecap="round"><path d="M90 12v16M90 92v16M42 60H26m128 0h-16M55 25l11 12m48-12-11 12M55 95l11-12m48 12-11-12"/></g><circle cx="90" cy="60" r="29" fill="#ffd867"/></svg>;
    case 'ship':
      return <svg {...common} className="word-picture"><path d="M28 79h124l-17 23H50Z" fill="#5a86c9"/><rect x="70" y="42" width="42" height="36" rx="4" fill="#f4f6f8"/><path d="M91 42V18l28 18H91Z" fill="#f36f66"/><path d="M20 104c18 8 34 8 51 0 18 8 35 8 52 0 17 8 31 8 45 0" fill="none" stroke="#73b5db" strokeWidth="5" strokeLinecap="round"/></svg>;
    case 'chair':
      return <svg {...common} className="word-picture"><rect x="55" y="24" width="70" height="52" rx="8" fill="#d39a63"/><rect x="58" y="70" width="65" height="14" rx="5" fill="#b97a46"/><path d="M64 83v27m52-27v27" stroke="#805533" strokeWidth="8" strokeLinecap="round"/></svg>;
    case 'tree':
      return <svg {...common} className="word-picture"><rect x="83" y="68" width="15" height="39" rx="5" fill="#8c623e"/><circle cx="90" cy="47" r="31" fill="#6eb36c"/><circle cx="67" cy="57" r="18" fill="#73bf70"/><circle cx="113" cy="57" r="18" fill="#73bf70"/></svg>;
    case 'book':
      return <svg {...common} className="word-picture"><path d="M30 32h52c9 0 14 5 14 13v60c-5-7-12-10-21-10H30Z" fill="#6b7fe0"/><path d="M150 32H98c-9 0-14 5-14 13v60c5-7 12-10 21-10h45Z" fill="#8ba0ef"/><path d="M90 42v54" stroke="#fff" strokeWidth="3" opacity=".65"/></svg>;
    case 'car':
      return <svg {...common} className="word-picture"><path d="M38 70 53 44h68l18 26h11v25H30V70Z" fill="#ef6b62"/><path d="M65 49h44l12 19H53Z" fill="#d9eff8"/><circle cx="58" cy="95" r="12" fill="#303846"/><circle cx="124" cy="95" r="12" fill="#303846"/></svg>;
    case 'star':
      return <svg {...common} className="word-picture"><path d="m90 14 14 29 32 5-23 22 6 32-29-15-29 15 6-32-23-22 32-5Z" fill="#ffd45f" stroke="#e8b94c" strokeWidth="3"/></svg>;
    default:
      return <div className="word-picture emoji-picture" aria-label={label}>{emoji}</div>;
  }
}
