import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <p>#Vanlife</p>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </>
  );
};
