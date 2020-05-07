import React from 'react';

import ContactForm from './ContactForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

test('ContactForm renders', () => {
    render(<ContactForm />);
});

test('able to fill out form and submit', async () => {
    const { getByTestId, getByText, getByLabelText, getAllByText } = render(
        <ContactForm />
    );

    act(() => {
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
            target: {
                name: 'message',
                value: 'gimme fake message here please',
            },
        });
        fireEvent.click(getByTestId(/submit/i));

        expect;
    });
    // console.log(getByText(/email/i).value);
    // console.log(getByLabelText(/email/i).value);
    // console.log(getByTestId(/email/i).value);
});
