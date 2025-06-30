import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile/popeye">Popeye page</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach Page</Link>
          </li>
          <li>
            <Link to="aboutreactrouter/info">React Router: About</Link>
          </li>
          <li>
            <Link to="aboutreactrouter/uses">React Router: Uses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
