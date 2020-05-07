import React from 'react';

import ContactForm from './ContactForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

test('ContactForm renders', () => {
    render(<ContactForm />);
});

test('Submit returns an error if inputs are left blank', () => {
    const { getByTestId, getAllByText, toBeInTheDocument } = render(
        <ContactForm />
    );
    fireEvent.click(getByTestId(/submit/i));
    expect(getAllByText('error').toBeInTheDocument());
});
