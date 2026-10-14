export async function GET() {
  return Response.json(
    {
      error: 'Runtime speech generation is disabled. The app uses bundled pronunciation audio from public/audio/en-gb.',
    },
    { status: 410 },
  );
}
