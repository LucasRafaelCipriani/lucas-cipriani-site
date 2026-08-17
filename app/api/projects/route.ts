import { Project } from '@/types/Project';

export async function GET() {
  const data: Project[] = [
    {
      icon: '📺',
      title: 'Sky+/DGO',
      description:
        'Senior Front-End Developer responsible for developing user interfaces and features for the Sky+/DGO applications across Web, Chromecast, and Smart TV platforms.',
    },
    {
      icon: '⚡',
      title: 'ABB Marketplace',
      description:
        'The frontend lead for a B2B e-commerce offering on a Magento platform. My role was to build scalable UI components and ensure cross-browser compatibility.',
    },
    {
      icon: '🧒',
      title: 'Step Up for Students (SUFS)',
      description:
        'Created a custom storefront with React and Next.js, which was integrated to a Magento backend. My position involved collaborating with designers and backend developers to create a fast, responsive, and easy to use interface.',
    },
    {
      icon: '📖',
      title: 'BOOKSIO',
      description:
        'I was a contributor on a Magento-lead online bookstore. I developed the front-end experience, working to improve page load speeds, build reusable UI modules, and to integrate third-party services.',
    },
    {
      icon: '🎁',
      title: 'Thoughtfull',
      description:
        'I contributed to the development of an e-commerce offering using Shopify, where I implemented the custom theme and improved the site performance for an improved shopping experience.',
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
