import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/commons/Button';
import '@testing-library/jest-dom';

describe('Button 컴포넌트', () => {
  test('disabled=true면 실제로 버튼이 비활성화된다.', () => {
    render(<Button disabled>버튼</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  test('onClick 핸들러가 정상적으로 동작한다.', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>버튼</Button>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
