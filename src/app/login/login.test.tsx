import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './page';

jest.mock('@/assets/icons/ic_Invisibility.svg', () => {
  function MockInVisibilityIcon() {
    return <svg data-testid="mock-invisibility-icon" />;
  }
  return MockInVisibilityIcon;
});
jest.mock('@/assets/icons/ic_visibility.svg', () => {
  function MockVisibilityIcon() {
    return <svg data-testid="mock-visibility-icon" />;
  }
  return MockVisibilityIcon;
});

describe('LoginPage', () => {
  test('폼과 버튼이 화면에 나타난다.', () => {
    render(<Login />);
    expect(screen.getByLabelText('아이디')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeDisabled();
  });

  test('모든 인풋이 유효하면 로그인버튼이 활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Login />);

    await user.type(screen.getByLabelText('아이디'), 'testemail@email.com');
    await user.type(screen.getByLabelText('비밀번호'), 'testpassword');
    expect(screen.getByRole('button', { name: '로그인' })).toBeEnabled();
  });

  test('이메일이 유효하지 않으면 로그인버튼이 비활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email');
    await user.type(screen.getByLabelText('비밀번호'), 'testpassword');
    expect(screen.getByRole('button', { name: '로그인' })).toBeDisabled();
  });

  test('비밀번호가 유효하지 않으면 로그인버튼이 비활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email.com');
    await user.type(screen.getByLabelText('비밀번호'), 'test');
    expect(screen.getByRole('button', { name: '로그인' })).toBeDisabled();
  });
});
