import { Link } from "react-router-dom";

export const AppHeader = ({ logo, links }) => {
  return (
    <header id="header">
      <div className="header--container">
        <h1 id="brand"><Link to="/">{logo}</Link></h1>
        <nav className="main-menu">
          <ul>
            {links.map(link => <li key={link.name}><a href={link.link} className="main-menu--link">{link.name}</a></li>)}
          </ul>
        </nav>
        <div className="main-search">
          <input name="search" id="search-input" placeholder="Search..."></input>
        </div>
      </div>
    </header>
  )
}
