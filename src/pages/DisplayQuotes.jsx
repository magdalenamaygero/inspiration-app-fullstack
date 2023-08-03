import { Link } from 'react-router-dom';
import Quotes from '../components/Quotes';

function DisplayQuotes() {

  return (
    <>
      <nav>
        <div className="level-right">
        <Link to="/savedQuotes"><button class="button is-link is-light">Favorites</button></Link>
        </div>
        <h1 id="title">MIND @ EASE</h1>
        <h2 className="subtitle is-2" >Welcome to Your World of Creativity</h2>

      </nav>
      <main>
        <Quotes />
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Mind@Ease</strong><a href="https://jgthms.com"> by Magdalena May Gero from </a>
            <a href="http://opensource.org/licenses/mit-license.php"> The Marcy Lab School</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default DisplayQuotes;
