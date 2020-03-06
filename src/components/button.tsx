import styled from 'styled-components';
import React from 'react';

function Button({
  className,
  simpleAction,
}: {
  className?: string;
  simpleAction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}) {
  return (
    <button className={className} onClick={simpleAction}>
      Test redux action
    </button>
  );
}

export default styled(Button)`
  width: 100%;
`;
