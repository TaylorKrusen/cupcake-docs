import React from 'react';
import {Link} from 'docz';

const authTypeMap = {
  'App Authentication': 'app',
  'User Authentication': 'user',
  'Dropbox-API-Select-Admin (Whole Team)': 'team',
};

function AuthLink(props) {
  let {authType} = props;
  authType = authTypeMap[authType] || authType;
  if (authType === 'user') {
    return <Link to="TODO">User</Link>;
  } else if (authType === 'app') {
    return <Link to="TODO">App</Link>;
  } else if (authType === 'team') {
    return <Link to="TODO">Team</Link>;
  }
  throw new Error('unexpected auth type ' + authType);
}

export default function AuthTypes(props) {
  const {authTypes} = props;
  if (authTypes.length === 0) {
    return null;
  } else if (authTypes.length === 1) {
    return <AuthLink authType={authTypes[0]} />;
  } else {
    return (
      <>
        <AuthLink authType={authTypes[0]} />
        {authTypes.slice(1).map((authType) => (
          <React.Fragment key={authType}>
            , <AuthLink authType={authType} />
          </React.Fragment>
        ))}
      </>
    );
  }
}
