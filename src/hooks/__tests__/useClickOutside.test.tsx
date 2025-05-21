import React, { useRef } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useClickOutside } from '../useClickOutside';

afterEach(cleanup);

function TestComponent({ onClickOutside }: { onClickOutside: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClickOutside);

  return (
    <div>
      <div ref={ref} data-testid="inside">
        Inside Element
      </div>

      <div data-testid="outside">Outside Element</div>
    </div>
  );
}

describe('useClickOutside 훅 테스트', () => {
  test('요소 외부를 클릭하면 onclickOutside가 호출된다.', () => {
    const handleClickOutside = jest.fn();
    const { getByTestId } = render(
      <TestComponent onClickOutside={handleClickOutside} />,
    );

    fireEvent.mouseDown(getByTestId('outside'));

    expect(handleClickOutside).toHaveBeenCalledTimes(1);
  });

  test('요소 내부를 클릭하면 onclickOutside가 호출되지 않는다.', () => {
    const handleClickOutside = jest.fn();
    const { getByTestId } = render(
      <TestComponent onClickOutside={handleClickOutside} />,
    );

    fireEvent.mouseDown(getByTestId('inside'));

    expect(handleClickOutside).not.toHaveBeenCalled();
  });
});
