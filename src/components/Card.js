import { Link } from "react-router-dom";

export const Card = ({ movieID, image_url, title, description }) => {
  return (
    <article className="article-card">
      <img src={ image_url } alt={ title } />
      <div>
        <h2><Link to={`/detail/${movieID}`}>{ title }</Link></h2>
        <p>{ description }</p>
      </div>
    </article>
  )
}
