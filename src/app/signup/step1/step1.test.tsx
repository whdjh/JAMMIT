import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Step1 from './page';

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

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('SignupStep1Page', () => {
  test('폼과 버튼이 화면에 나타난다.', () => {
    render(<Step1 />);
    expect(screen.getByLabelText('아이디')).toBeInTheDocument();
    expect(screen.getByLabelText('이름')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호 확인')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다음' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다음' })).toBeDisabled();
  });

  test('모든 인풋이 유효하면 버튼이 활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Step1 />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email.com');
    await user.type(screen.getByLabelText('이름'), '김잼잇');
    await user.type(screen.getByLabelText('비밀번호'), 'testpassword');
    await user.type(screen.getByLabelText('비밀번호 확인'), 'testpassword');
    expect(screen.getByRole('button', { name: '다음' })).toBeEnabled();
  });

  test('이메일이 유효하지 않으면 버튼이 비활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Step1 />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email');
    await user.type(screen.getByLabelText('이름'), '김잼잇');
    await user.type(screen.getByLabelText('비밀번호'), 'testpassword');
    await user.type(screen.getByLabelText('비밀번호 확인'), 'testpassword');
    expect(screen.getByRole('button', { name: '다음' })).toBeDisabled();
  });

  test('비밀번호가 유효하지 않으면 버튼이 비활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Step1 />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email.com');
    await user.type(screen.getByLabelText('이름'), '김잼잇');
    await user.type(screen.getByLabelText('비밀번호'), 'test');
    await user.type(screen.getByLabelText('비밀번호 확인'), 'test');
    expect(screen.getByRole('button', { name: '다음' })).toBeDisabled();
  });

  test('비밀번호와 비밀번호 확인이 불일치하면 버튼이 비활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Step1 />);
    await user.type(screen.getByLabelText('아이디'), 'testemail@email.com');
    await user.type(screen.getByLabelText('이름'), '김잼잇');
    await user.type(screen.getByLabelText('비밀번호'), 'testpassword');
    await user.type(screen.getByLabelText('비밀번호 확인'), 'testpasswor');
    expect(screen.getByRole('button', { name: '다음' })).toBeDisabled();
  });
});
