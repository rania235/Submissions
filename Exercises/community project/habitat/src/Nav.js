import React from "react";

export default function Nav(props) {
  console.log(props);
  return (
    <div>
      <ul>
        <li>
          <a class="active" href="home.html">
            Home
          </a>
        </li>
        <li>
          <a href="Gallery.html">Gallery</a>
        </li>
        <li>
          <a href="news.html">News</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  );
}
