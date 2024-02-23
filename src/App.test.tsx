import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Cadastro de Clientes', () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastro/i);
  expect(linkElement).toBeInTheDocument();
});
