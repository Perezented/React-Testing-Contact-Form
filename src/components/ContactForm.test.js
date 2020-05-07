import React from 'react';

import ContactForm from './ContactForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

test('ContactForm renders', () => {
    render(<ContactForm />);
});

test('able to fill out form and submit', async () => {
    const { getByTestId } = render(<ContactForm />);
    console.log(getByTestId(/firstname/i).value);
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
    console.log(getByTestId(/message/i).value);
});
