import './NavList.css';
import links from '../../utils/links';
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <nav className="nav-list">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
