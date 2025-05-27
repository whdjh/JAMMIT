import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea, { TextAreaProps } from '../Textarea';

describe('TextArea Component', () => {
  const defaultProps: TextAreaProps = {
    placeholder: 'Enter text...',
    value: '',
    onChange: jest.fn(),
  };

  test('초기 렌더링시 placeholder value 출력 여부', () => {
    render(<TextArea {...defaultProps} value="Initial Value" />);
    const textarea = screen.getByPlaceholderText(
      'Enter text...',
    ) as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe('Initial Value');
  });

  test('이벤트 발생시 핸들러 정상 호출 여부', () => {
    const onChangeMock = jest.fn();
    render(<TextArea {...defaultProps} onChange={onChangeMock} />);
    const textarea = screen.getByPlaceholderText('Enter text...');

    fireEvent.change(textarea, { target: { value: 'New Value' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });

  test('error props시 스타일 적용여부', () => {
    render(<TextArea {...defaultProps} error />);
    const textarea = screen.getByPlaceholderText('Enter text...');
    expect(textarea).toHaveClass('border-errorBorder');
  });

  test('커스텀 클래스 적용 확인', () => {
    render(<TextArea {...defaultProps} className="custom-class" />);
    const textarea = screen.getByPlaceholderText('Enter text...');

    expect(textarea).toHaveClass('custom-class');
  });
});
