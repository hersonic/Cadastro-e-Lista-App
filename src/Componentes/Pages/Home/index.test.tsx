import { render } from '@testing-library/react';

import Home from './';

const setup = (props = {}) => {
  const defaultProps = {};
  const setupProps = { ...defaultProps, ...props };

  const view = render(<Home {...setupProps} />);

  return { ...view };
};

describe('Home', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });
});
