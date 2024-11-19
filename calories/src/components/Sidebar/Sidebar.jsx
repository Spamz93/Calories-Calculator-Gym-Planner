import './Sidebar.css'
import links from '../../utils/links';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.name}</Link>
              </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
