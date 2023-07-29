import { useState } from 'react';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h1 id="title">MIND @ EASE</h1>
        <h2 class="subtitle is-2" >Welcome To Your World Of Creativity</h2>
        {/* <button class="button is-success">Home</button> */}
        <button class="button is-success">Saved</button>
      </nav>
      <main>
        <Quotes />
      </main>
      {/* <div> */}
        {/* <button onClick={}>Refresh</button> */}
      {/* </div> */}
    </>
  );
}

export default App;
