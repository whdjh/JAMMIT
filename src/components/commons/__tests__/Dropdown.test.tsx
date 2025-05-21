import { render, screen, fireEvent, within } from '@testing-library/react';
import Dropdown from '@/components/commons/Dropdown';
import '@testing-library/jest-dom';

describe('Dropdown 테스트 입니다.', () => {
  const menuOptions = ['최신 순', '리뷰 높은 순', '참여 인원 순'];
  const mockOnSelect = jest.fn();

  test('초기 렌더링 시 기본 선택 값이 "최신 순"이어야 한다.', () => {
    render(
      <Dropdown
        menuOptions={menuOptions}
        onSelect={mockOnSelect}
        prefixIcon={<span data-testid="icon">icon</span>}
      />,
    );
    expect(screen.getByText('최신 순')).toBeInTheDocument();
  });

  test('버튼 클릭 시 드롭다운 옵션이 표시되어야 한다.', () => {
    render(
      <Dropdown
        menuOptions={menuOptions}
        onSelect={mockOnSelect}
        prefixIcon={<span data-testid="icon">icon</span>}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const dropdown = screen
      .getByRole('button')
      .parentElement?.querySelector('div');
    expect(dropdown).toBeInTheDocument();

    const dropdownScope = within(dropdown!);

    menuOptions.forEach((option) => {
      expect(dropdownScope.getByText(option)).toBeInTheDocument();
    });
  });

  test('옵션 클릭 시 선택한 값으로 변경되고 드롭다운이 닫혀야 한다.', () => {
    render(
      <Dropdown
        menuOptions={menuOptions}
        onSelect={mockOnSelect}
        prefixIcon={<span data-testid="icon">icon</span>}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const optionToSelect = screen.getByText('리뷰 높은 순');
    fireEvent.click(optionToSelect);

    expect(mockOnSelect).toHaveBeenCalledWith('리뷰 높은 순');
    expect(screen.getByText('리뷰 높은 순')).toBeInTheDocument();
  });
});
