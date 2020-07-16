import React from 'react';

import '../scss/warning.scss';

const Warning: React.FC<{}> = ({children}) => {
  return (
    <div className="warning-container">
      <span className="warning-content">{children}</span>
    </div>
  );
};

export default Warning;
