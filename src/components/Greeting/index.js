import React, { useState } from 'react';

const Greeting = () => {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("");
    };

    return (
        <>
        <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'Drake Lovers'}!</h3>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" name="username" placeholder="Enter your name" value={nameInput} onChange={handleInput}/>
          <input type="submit" value="Update!"/>
        </form>
        </>
    )

}

export default Greeting;