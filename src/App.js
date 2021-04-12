import React, { Component } from 'react';
import Artists from './components/Artists';
import Songs from './components/Songs';

function App() {
  return (
    <main>
      <h1>Our music app</h1>
      <Artists />
      <Songs />
    </main>
  );
}

export default App;
