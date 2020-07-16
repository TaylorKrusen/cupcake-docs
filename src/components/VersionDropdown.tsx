import React from 'react';

interface Props {
  versions: number[];
  selected: number;
}

export default function VersionDropdown({versions, selected}: Props) {
  return (
    <select id="versions" name="versions" defaultValue={selected}>
      {versions.map((version) => (
        <option key={`version-${version}`} value={version}>
          {version}
        </option>
      ))}
    </select>
  );
}
