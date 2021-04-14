import { screen } from '@testing-library/react';
import Greeting from './';

describe('App', () => {

    beforeEach(() => {
        render(<Greeting />);
    });

    test("greets a user as 'Drake Fans' if no username given", () => {
        const greeting = screen.getByRole('heading', { name: 'greeting' });
        expect(greeting.textContent).toBe("Whats' poppin, Drake Fans!");
    });
    
    test("does not change greeting whilst a user enters input", () => {
        const nameInput = screen.getByLabelText('Name')
        userEvent.type(nameInput, "Beth")
        const greeting = screen.getByRole('heading', { name: 'greeting' });
        expect(greeting.textContent).toBe("Whats' poppin, Drake Fans!");
        expect(nameInput.value).toBe("Beth")
    });
    
    test("greets a user by name when user submits name", () => {
        const nameInput = screen.getByLabelText('Name')
        userEvent.type(nameInput, "Bob{enter}")
        const greeting = screen.getByRole('heading', { name: 'greeting' });
        expect(greeting.textContent).toBe("Whats' poppin, Bob!");
    });
    
    test("clears user input after submission", () => {
        const nameInput = screen.getByLabelText('Name')
        userEvent.type(nameInput, "Bob{enter}")
        expect(nameInput.value).toBe("");
    });

});