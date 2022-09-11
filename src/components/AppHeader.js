import { Link } from "react-router-dom";

export const AppHeader = ({ logo }) => {
  return (
    <header id="header">
      <div className="header--container">
        <h1 id="brand">{logo}</h1>
        <Link to="/" className="main-menu--link">Home</Link>
      </div>
    </header>
  )
}
