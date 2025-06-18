import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('shows icon, title and description', () => {
  const projectData = {
    icon: '⚡',
    title: 'ABB Marketplace',
    description:
      'The frontend lead for a B2B e-commerce offering on a Magento platform. My role was to build scalable UI components and ensure cross-browser compatibility',
  };
  render(<ProjectCard project={projectData} />);

  expect(screen.getByTestId('projectIcon')).toBeInTheDocument();
  expect(screen.getByTestId('projectIcon')).toHaveTextContent(projectData.icon);

  expect(screen.getByTestId('projectTitle')).toBeInTheDocument();
  expect(screen.getByTestId('projectTitle')).toHaveTextContent(
    projectData.title
  );

  expect(screen.getByTestId('projectDescription')).toBeInTheDocument();
  expect(screen.getByTestId('projectDescription')).toHaveTextContent(
    projectData.description
  );
});
