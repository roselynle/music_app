import React from 'react';
import Artists from './components/Artists';
import AlbumCards from './components/AlbumCards';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <main>
      <h1>Our music app</h1>
      <Artists />
      <AlbumCards />
      <LikeButton />
    </main>
  );
}

export default App;
