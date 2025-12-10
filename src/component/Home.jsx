import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to FreshBite!</h1>
        <p className="home-description">
          Discover delicious food from your favorite restaurants-all in one place!
        </p>
        <div className="home-navigation">
          <Link to="/login" className="nav-button login-button">
            Login
          </Link>
          <Link to="/signup" className="nav-button signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
