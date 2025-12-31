// import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    --s: 100px; /* control the size */
    --c1: #ff8afc;
    --c2: #1b1b3a;

    --_g: var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%,
      var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%,
      var(--c1) 76% 84%, var(--c2) 86% 94%;
    background: radial-gradient(
        100% 100% at 100% 0,
        var(--c1) 4%,
        var(--_g),
        #0008 96%,
        #0000
      ),
      radial-gradient(
          100% 100% at 0 100%,
          #0000,
          #0008 4%,
          var(--_g),
          var(--c1) 96%
        )
        var(--c1);
    background-size: var(--s) var(--s);
  }`;

export default Pattern;
