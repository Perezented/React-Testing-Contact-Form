import React from 'react';

import ContactForm from './ContactForm';
import { render, fireEvent } from '@testing-library/react';

test('ContactForm renders', () => {
    render(<ContactForm />);
});

test('Submit returns an error if inputs are left blank', () => {
    const { getByTestId } = render(<ContactForm />);
    fireEvent.click(getByTestId(/submit/i));
});
