import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSignupStore } from '@/stores/useSignupStore';
import Step2 from './page';

jest.mock('@/assets/icons/ic_default_profile.svg', () => {
  function MockInVisibilityIcon() {
    return <svg data-testid="mock-default_profile-icon" />;
  }
  return MockInVisibilityIcon;
});
jest.mock('@/assets/icons/ic_edit.svg', () => {
  function MockVisibilityIcon() {
    return <svg data-testid="mock-edit-icon" />;
  }
  return MockVisibilityIcon;
});

beforeEach(() => {
  useSignupStore.setState({
    email: 'test@email.com',
    name: '김잼잇',
    password: 'testpassword',
    setStep1Data: () => {},
    resetSignupData: () => {},
  });
});

describe('SignupStep2Page', () => {
  test('폼 요소가 화면에 잘 보인다.', () => {
    render(<Step2 />);
    expect(screen.getByLabelText('닉네임')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '확인' })).toBeDisabled();
  });

  test('닉네임 입력하면 버튼 활성화된다.', async () => {
    const user = userEvent.setup();
    render(<Step2 />);

    await user.type(screen.getByLabelText('닉네임'), '잼잼러');

    expect(screen.getByRole('button', { name: '확인' })).toBeEnabled();
  });
});
