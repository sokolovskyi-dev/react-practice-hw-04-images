import React from 'react';

import { LoadButton } from './Button.styled';

const Button = ({ onClick }) => {
  return <LoadButton onClick={onClick}>Load more</LoadButton>;
};

export default Button;
