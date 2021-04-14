import { screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Homepage from '../Homepage';

describe('Homepage', () => {
    beforeEach(() => render(<Homepage />, { wrapper: MemoryRouter }));

    test("it displays greeting", () => {
        const greeting = screen.queryByRole('heading', {name: 'greeting'})
        expect(greeting).toBeInTheDocument();
    });

    test("page contains a bio", () => {
        const bio = screen.queryByRole('bio')
        expect(bio).toBeInTheDocument();
    })

})