import React from 'react';
import TypeExplanation from './TypeExplanation';
import stone_types from '../stone-types/alltypes';

export default (props) => <TypeExplanation {...props} typeInfo={stone_types} />;
