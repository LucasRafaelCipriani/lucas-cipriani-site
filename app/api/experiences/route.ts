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
        'Worked as a Front-End Developer at McFadyen Digital, developing user-friendly and responsive e-commerce interfaces using React, JavaScript, HTML, and CSS. Experienced in building scalable front-end solutions and integrating them with Magento 2. <br/><br/>Collaborated with cross-functional teams to transform business requirements and designs into efficient, high-quality digital experiences. Focused on usability, performance, maintainability, and delivering solutions that meet client requirements and business goals.',
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
    {
      title: 'Web Developer',
      company: 'Overlabs',
      startAt: new Date(2025, 7, 14),
      location: 'Remote (Brazil)',
      description: `Currently working as a Front-End Developer at Overlabs, developing interfaces and features for the Sky+/DGO streaming platform across web, Chromecast, and Smart TV environments. I build responsive web experiences and HTML5-based TV applications using JavaScript, React, SolidJS, HTML5, CSS, and Sass. <br/><br/>My work involves translating product requirements and designs into scalable, reusable, and user-friendly interfaces, while focusing on performance, responsiveness, and consistency across different platforms and devices. I also collaborate with product, design, and engineering teams to implement new features, improve existing functionality, and contribute to the evolution of the platform's front-end architecture.`,
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Redux', 'SolidJS'],
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
