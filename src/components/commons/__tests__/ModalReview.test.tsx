import { render, screen, fireEvent } from '@testing-library/react';
import ModalReview from '../Modal/ModalReview';

jest.mock('@/assets/icons/ic_Invisibility.svg', () => {
  return function MockInVisibilityIcon() {
    return <svg data-testid="mock-invisibility-icon" />;
  };
});

describe('ModalReview 렌데링 테스트', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  test('모달이 렌더링', () => {
    render(<ModalReview onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    expect(screen.getByText('리뷰쓰기')).toBeInTheDocument();
    expect(screen.getByText('만족스러운 경험이었나요?')).toBeInTheDocument();
    expect(screen.getByText('어떤 사람인가요?')).toBeInTheDocument();
    expect(
      screen.getByText('경험에 대해 자유롭게 남겨주세요.(선택)'),
    ).toBeInTheDocument();
  });

  test('취소 버튼 클릭 시 onCancel 호출', () => {
    render(<ModalReview onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    const cancelButton = screen.getByText('취소');
    fireEvent.click(cancelButton);
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('리뷰 등록 버튼은 조건을 만족해야 활성화', () => {
    render(<ModalReview onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    const submitButton = screen.getByText('리뷰 등록') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
