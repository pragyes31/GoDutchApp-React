import React from "react";

export default function Header(props) {
  return (
    <div class="header">
      <header className="main-title">{props.title}</header>
    </div>
  );
}
