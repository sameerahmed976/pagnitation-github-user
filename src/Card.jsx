import React from "react";

const Card = ({ avatar_url, html_url, login }) => {
  return (
    <>
      <article className="card">
        <img src={avatar_url} alt="user" className="card-img" />
        <h2 className="card-title">{login}</h2>
        <a href={html_url} className="card-url">
          view profile
        </a>
      </article>
    </>
  );
};

export default Card;
