import { render, screen } from '@testing-library/react';
import SkillBadge from './SkillBadge';

test('shows the correct skill text', () => {
  render(<SkillBadge skill="JavaScript" />);

  expect(screen.getByTestId('skillName')).toBeInTheDocument();
  expect(screen.getByTestId('skillName')).toHaveTextContent('JavaScript');
});
