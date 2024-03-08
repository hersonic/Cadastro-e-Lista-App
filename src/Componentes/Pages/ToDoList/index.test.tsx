import { render } from '@testing-library/react';

import  ToDoList  from './';

const setup = (props = {}) => {
  const defaultProps = {};
  const setupProps = { ...defaultProps, ...props };

  const view = render(<ToDoList {...setupProps} />);

  return { ...view };
};

describe('ToDoList', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });
});
