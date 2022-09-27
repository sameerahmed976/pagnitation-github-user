import React from "react";

const Card = ({ avatar_url, html_url, login }) => {
  return (
    <>
      <article class="card">
        <img src={avatar_url} alt="user" class="card-img" />
        <h2 class="card-title">{login}</h2>
        <a href={html_url} class="card-url">
          view profile
        </a>
      </article>
    </>
  );
};

export default Card;
