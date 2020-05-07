import React from 'react';

import ContactForm from './ContactForm';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';

test('ContactForm renders', () => {
    render(<ContactForm />);
});

test('able to fill out form and submit', () => {
    const { getByTestId, getByText, getByLabelText } = render(<ContactForm />);

    fireEvent.change(getByTestId(/firstname/i), {
        target: { name: 'firstName', value: 'first name here' },
    });

    fireEvent.change(getByTestId(/lastname/i), {
        target: { name: 'lastName', value: 'last name to go here' },
    });
    fireEvent.change(getByTestId(/email/i), {
        target: { name: 'email', value: 'email@email.com' },
    });
    fireEvent.change(getByTestId(/message/i), {
        target: { name: 'message', value: 'gimme fake message here please' },
    });
    console.log(getByText(/email/i).value);
    console.log(getByLabelText(/email/i).value);
    console.log(getByTestId(/email/i).value);
    fireEvent.click(getByTestId(/submit/i));
});
