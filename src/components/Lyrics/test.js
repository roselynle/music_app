import { screen } from '@testing-library/react';
import FetchAPI from '.';

import axios from 'axios';
jest.mock('axios');

describe('FetchAPI', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers();
    })

    test('it renders a loading message when no lyrics are loaded', () => {
        axios.get.mockResolvedValue({ data: {lyrics: "Sorry no lyrics found"} })
        render(<FetchAPI />);
        expect(screen.getByText('Lyrics are on their way!')).toBeInTheDocument();
    })

    // test('it calls the official joke api on mount and renders a joke', async () => {
    //     axios.get.mockResolvedValue({ data: {setup: 'What is this?', punchline: 'A bad joke.'} })
    //     render(<Jokes />)
    //     expect(axios.get).toHaveBeenCalledWith("https://official-joke-api.appspot.com/random_joke")
    //     expect(await screen.findByText('A bad joke.')).toBeInTheDocument();
    // })

    // test('it renders a terrible joke on a failed api call', async () => {
    //     axios.get.mockRejectedValue(new Error('A sick joke'))
    //     render(<Jokes />);
    //     const badJoke = await screen.findByText("What's worse than a bad joke?")
    //     expect(badJoke).toBeInTheDocument()
    // })

    // test('it starts an 10 second interval on mount', () => {
    //     render(<Jokes />);
    //     expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 10000);
    // })
})
