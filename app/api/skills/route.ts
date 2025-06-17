import { Skill } from '@/types/Skill';

export async function GET() {
  const data: Skill[] = [
    {
      title: 'Frontend Skills',
      skills: [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Redux',
        'Vue',
        'NodeJS',
        'KnockoutJS',
      ],
    },
    {
      title: 'E-commerce Platforms',
      skills: ['Adobe Commerce (Magento)', 'Shopify', 'OCC'],
    },
    {
      title: 'Methodologies and Tools',
      skills: [
        'Scrum',
        'Agile',
        'JIRA',
        'BitBucket',
        'Github',
        'UX/UI Collaboration',
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
