import { render } from '@testing-library/react';

import Formulario from './';

const setup = (props = {}) => {
  const defaultProps = {};
  const setupProps = { ...defaultProps, ...props };

  const view = render(<Formulario {...setupProps} />);

  return { ...view };
};

describe('Formulario', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });
});

