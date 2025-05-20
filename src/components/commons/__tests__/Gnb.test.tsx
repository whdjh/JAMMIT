import { usePathname } from 'next/navigation';
import Gnb from '@/components/commons/Gnb';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('@/assets/icons/ic_default_profile.svg', () => {
  function MockProfileIcon() {
    return <svg data-testid="mock-profile-icon" />;
  }
  return MockProfileIcon;
});

describe('Gnb 컴포넌트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('현재 경로에 해당하는 링크에 data-active=true가 설정된다', () => {
    (usePathname as jest.Mock).mockReturnValue('/wishlist');
    render(<Gnb />);
    const wishlistLink = screen.getByText('찜한 모임');
    expect(wishlistLink).toHaveAttribute('data-active', 'true');
  });
});
