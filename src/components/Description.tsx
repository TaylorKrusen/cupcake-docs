import React from 'react';

const Description: React.FC<{description: string}> = ({description}) => {
  const paragraphs = description.split('&nbsp').join(' ').split('\\n');
  const toBeRendered = paragraphs.map((paragraph, idx) => {
    return <div key={`description-paragraph-${idx}`}>{paragraph}</div>;
  });
  return <div className="description-box">{toBeRendered}</div>;
};

export default Description;
