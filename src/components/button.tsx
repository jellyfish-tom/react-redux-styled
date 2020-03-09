import React from 'react';
import styled from 'styled-components';

import colors from './colors';

function Button({
  className,
  clickHandler,
  children,
}: {
  className?: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}) {
  return (
    <button className={className} onClick={clickHandler}>
      {children}
    </button>
  );
}

interface ButtonProps {
  color?: string;
  background?: string;
}

const defaultButtonColor = colors.blue;
const defaultButtonBackground = colors.white;

const StyledButton = styled(Button)`
  color: ${(props: ButtonProps) => props.color || defaultButtonColor};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: ${(props: ButtonProps) => props.background || defaultButtonBackground};
  padding: 3px 5px;
  border: 2px solid #007bff;
  border-color: ${(props: ButtonProps) => props.color};
  display: inline-block;
  transition: all 0.4s ease 0s;

  &:hover {
    color: ${(props: ButtonProps) => props.background || defaultButtonBackground};
    background: ${(props: ButtonProps) => props.color || defaultButtonColor};
    border-color: ${(props: ButtonProps) => props.color || defaultButtonColor};
    transition: all 0.4s ease 0s;
  }
`;

export default StyledButton;
