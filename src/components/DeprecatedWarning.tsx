/** @jsx jsx */
import {jsx, Box} from 'theme-ui';

export default function ({deprecatedBy}: {deprecatedBy: string}) {
  let deprecatedByMsg;
  if (deprecatedBy) {
    deprecatedByMsg = <span>Use {deprecatedBy} instead.</span>;
  }
  return (
    <Box className="deprecated-warning">WARNING: This API is deprecated.{deprecatedByMsg}</Box>
  );
}
