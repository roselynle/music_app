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

    test('changes color of Like when clicked', () => {
        let likeButton = screen.getByRole("switch")
        let initColor = likeButton.style.color
        useEvent.click(likeButton)
        let clickedColor = likeButton.style.color
        expect(clickedColor).not.toBe(initColor)
    })
})