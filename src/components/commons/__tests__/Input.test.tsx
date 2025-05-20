import React, { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Input';

function Wrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
}

function renderWithForm(ui: React.ReactElement) {
  return render(<Wrapper>{ui}</Wrapper>);
}

describe('Input 컴포넌트', () => {
  test('label이 정상적으로 렌더링', () => {
    renderWithForm(<Input name="test" type="text" label="테스트 라벨" />);
    expect(screen.getByText('테스트 라벨')).toBeInTheDocument();
  });

  test('placeholder와 defaultValue가 전달되어 렌더링', () => {
    renderWithForm(
      <Input
        name="test"
        type="text"
        placeholder="입력하세요"
        defaultValue="초기값"
      />,
    );
    const input = screen.getByPlaceholderText('입력하세요') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('초기값');
  });

  test('onChange, onFocus, onBlur 이벤트가 호출', () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    renderWithForm(
      <Input
        name="test"
        type="text"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );

    const input = screen.getByRole('textbox');

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.change(input, { target: { value: 'changed' } });
    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('ref가 innerRef로 전달', () => {
    const innerRef = createRef<HTMLInputElement | null>();
    renderWithForm(<Input name="test" type="text" innerRef={innerRef} />);

    expect(innerRef.current).toBeInstanceOf(HTMLInputElement);
  });

  test('에러 메시지가 있을 경우 표시', async () => {
    function Wrapper() {
      const methods = useForm({ mode: 'onBlur' });
      return (
        <FormProvider {...methods}>
          <Input
            name="test"
            type="text"
            label="라벨"
            rules={{ required: '필수 입력 항목입니다.' }}
          />
          <button onClick={() => methods.trigger('test')}>검증</button>
        </FormProvider>
      );
    }

    render(<Wrapper />);

    const button = screen.getByText('검증');
    fireEvent.click(button);

    const errorMsg = await screen.findByText('필수 입력 항목입니다.');
    expect(errorMsg).toBeInTheDocument();
  });
});
