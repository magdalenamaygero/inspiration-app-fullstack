import { useState } from 'react';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h1 id="title">MIND @ EASE</h1>
        <h2>Welcome to your world of creativity</h2>
        <button>Home</button>
        <button>Saved</button>
      </nav>
      <main>
        <Quotes />
      </main>
      <div>
        <button>Refresh</button>
      </div>
    </>
  );
}

export default App;
