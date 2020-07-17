import React from 'react';

const Description: React.FC<{description: string}> = ({description}) => {
  if (!description) {
    return <div className="description-box">No description available.</div>
  }
  
  const paragraphs = description.split('&nbsp').join(' ').split('\\n');
  const toBeRendered = paragraphs.map((paragraph, idx) => {
    return <div key={`description-paragraph-${idx}`}>{paragraph}</div>;
  });
  return <div className="description-box">{toBeRendered}</div>;
};

export default Description;
