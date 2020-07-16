import React from 'react';
import {Link} from 'docz';

const authTypeMap: Record<string, string> = {
  'App Authentication': 'app',
  'User Authentication': 'user',
  'Dropbox-API-Select-Admin (Whole Team)': 'team',
};

function AuthLink(props: {authType: string}) {
  let {authType} = props;
  authType = authTypeMap[authType] || authType;
  if (authType === 'user') {
    return (
      <Link to="https://www.dropbox.com/developers/reference/auth-types#user">
        User Authentication
      </Link>
    );
  } else if (authType === 'app') {
    return (
      <Link to="https://www.dropbox.com/developers/reference/auth-types#app">
        App Authentication
      </Link>
    );
  } else if (authType === 'team') {
    return (
      <Link to="https://www.dropbox.com/developers/reference/auth-types#team">
        Team Authentication
      </Link>
    );
  } else if (authType === 'whole_team') {
    return (
      <Link to="https://www.dropbox.com/developers/documentation/http/teams#teams-member-file-access">
        Dropbox-API-Select-Admin (Whole Team)
      </Link>
    );
  } else if (authType === 'team_admin') {
    return (
      <Link to="https://www.dropbox.com/developers/documentation/http/teams#teams-member-file-access">
        Dropbox-API-Select-Admin (Team Admin)
      </Link>
    );
  } else if (authType === 'noauth') {
    return (
      <Link to="https://www.dropbox.com/developers/reference/auth-types#noauth">
        No Authentication
      </Link>
    );
  }
  throw new Error('unexpected auth type ' + authType);
}

export default function AuthTypes(props: {authTypes: string[]}) {
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
