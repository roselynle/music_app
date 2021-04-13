import { screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
    
    beforeEach(() => {
        render(<Header />);
    })

    test('it renders a nav tag', () => {
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})