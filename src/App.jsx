import { useState } from 'react';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div class="level-right">
         {/* <p class="level-item"><strong>All</strong></p> */}
        {/* <p class="level-item"><a>Favorite</a></p> */}
        <button class="button is-link is-light">Favorites</button>
        </div>
        <h1 id="title">MIND @ EASE</h1>
        <h2 class="subtitle is-2" >Welcome To Your World Of Creativity</h2>
        {/* <button class="button is-success">Saved</button> */}
      </nav>
      <main>
        <Quotes />
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Mind@Ease</strong> by <a href="https://jgthms.com">Magdalena May Gero </a> from
            <a href="http://opensource.org/licenses/mit-license.php"> The Marcy Lab School</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
