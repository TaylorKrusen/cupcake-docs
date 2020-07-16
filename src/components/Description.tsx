import React from 'react';

const Description: React.FC<{description: string}> = ({description}) => {
  const paragraphs = description.split('&nbsp').join(' ').split('\\n');
  const toBeRendered = paragraphs.map((paragraph) => {
    return <div>{paragraph}</div>;
  });
  return <div className="description-box">{toBeRendered}</div>;
};

export default Description;
