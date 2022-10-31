import styled from "@emotion/styled";

export const StyledPrimaryButton = styled.button`
  background: #0070f3;
  color: white;
  border: none;
  padding: 1rem;

  &:disabled {
    background: gray;
  }
`;

export const StyledWarningButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 1rem;
`;
