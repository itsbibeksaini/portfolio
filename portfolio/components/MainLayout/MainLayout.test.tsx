import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainLayout from './MainLayout';

describe('<MainLayout />', () => {
  test('it should mount', () => {
    render(<MainLayout />);
    
    const mainLayout = screen.getByTestId('MainLayout');

    expect(mainLayout).toBeInTheDocument();
  });
});