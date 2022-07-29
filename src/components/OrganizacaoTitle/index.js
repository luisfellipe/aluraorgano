import React from "react";
import "./OrganizacaoTitle.css"

export default function OrganizacaoTile({title}) {
  return (
    <div className="container">
      <div className="box-title">
          <span className="title">{title}</span>
        <div
          className="borda-inferior-org"
        ></div>
      </div>
    </div>
  );
}

