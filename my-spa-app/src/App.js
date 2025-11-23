import React, { useState } from 'react';

// Home Component
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my Simple React SPA!</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple single page application built with React.</p>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button> | 
        <button onClick={() => setCurrentPage('about')}> About</button>
      </nav>
      
      <hr />
      
      {renderPage()}
    </div>
  );
}

export default App;