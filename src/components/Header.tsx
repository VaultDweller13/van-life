import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <h1>#Vanlife</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </>
  );
};
