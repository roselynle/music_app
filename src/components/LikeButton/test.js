import { screen } from '@testing-library/react';
import LikeButton from '.';

describe('LikeButton', () => {
    beforeEach(() => { 
        render(<LikeButton />)
    })

    test('renders a button with a Like in it', () => {
        let likeButton = screen.getByRole("switch")
        expect(likeButton.textContent).toBe('Like')
    })
})