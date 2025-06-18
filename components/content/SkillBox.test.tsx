import { render, screen, within } from '@testing-library/react';
import SkillBox from './SkillBox';

test('shows title and all skills', () => {
  const skillData = {
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
  };
  render(<SkillBox skill={skillData} />);

  expect(screen.getByTestId('skillTypeTitle')).toBeInTheDocument();

  for (let skill of skillData.skills) {
    expect(
      within(screen.getByTestId('skillName')).getByText(skill)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId('skillName')).getByText(skill)
    ).toHaveTextContent(skill);
  }
});
