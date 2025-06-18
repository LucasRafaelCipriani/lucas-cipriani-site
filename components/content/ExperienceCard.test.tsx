import { render, screen, within } from '@testing-library/react';
import { format } from 'date-fns';
import ExperienceCard from './ExperienceCard';

test('shows all experience data in the correct fields', () => {
  const experienceData = {
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
  };
  render(<ExperienceCard experience={experienceData} />);

  expect(screen.getByTestId('experienceTitle')).toBeInTheDocument();
  expect(screen.getByTestId('experienceTitle')).toHaveTextContent(
    experienceData.title
  );

  expect(screen.getByTestId('experienceCompany')).toBeInTheDocument();
  expect(screen.getByTestId('experienceCompany')).toHaveTextContent(
    experienceData.company
  );

  expect(screen.getByTestId('experienceLocation')).toBeInTheDocument();
  expect(screen.getByTestId('experienceLocation')).toHaveTextContent(
    experienceData.location
  );

  expect(screen.getByTestId('experienceDescription')).toBeInTheDocument();
  expect(screen.getByTestId('experienceDescription')).toHaveTextContent(
    experienceData.description
  );

  expect(screen.getByTestId('experiencePeriod')).toBeInTheDocument();
  expect(screen.getByTestId('experiencePeriod')).toHaveTextContent(
    `${format(experienceData.startAt, 'MMM yyyy')} - ${format(
      experienceData.endAt,
      'MMM yyyy'
    )}`
  );

  expect(screen.getByTestId('experienceSkills')).toBeInTheDocument();
  expect(
    within(screen.getByTestId('experienceSkills')).getAllByTestId('skillName')
  ).toHaveLength(experienceData.skills.length);
});
