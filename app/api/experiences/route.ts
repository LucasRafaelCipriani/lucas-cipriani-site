import { Experience } from '@/types/Experience';

export async function GET() {
  const data: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'McFadyen Digital',
      startAt: new Date(2017, 4, 2),
      endAt: new Date(2025, 4, 16),
      location: 'Remote (USA)',
      description:
        'Worked as a Frontend Developer at McFadyen Digital, creating user-friendly e-commerce interfaces with React, JavaScript, HTML, and CSS. Experienced in building scalable solutions integrated with Magento2. Committed to delivering high-quality work focused on usability, performance, and client satisfaction.',
      skills: [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Redux',
        'Magento',
        'Shopify',
        'KnockoutJS',
      ],
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
