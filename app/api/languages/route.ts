import { Language } from '@/types/Language';

export async function GET() {
  const data: Language[] = [
    {
      language: 'Portuguese',
      level: 'Native',
    },
    {
      language: 'English',
      level: 'Fluent',
    },
    {
      language: 'Italian',
      level: 'Begginer',
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
