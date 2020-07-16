import React from 'react';
import '../scss/row_container.scss';

export default function RowContainer({title, children}) {
  return (
    <div className="row-container">
      <div className="row-title">{title}</div>
      <div className="row-content">{children}</div>
    </div>
  );
}
