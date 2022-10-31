import styled from "@emotion/styled";
import { InputHTMLAttributes, Ref } from "react";

type InputProps = {
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  const { errorMessage, name, ...rest } = props;

  return (
    <StyledInput>
      <label htmlFor={name}>{name}</label>
      <input {...rest} />
      <p>{errorMessage}</p>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  label {
    display: block;
    margin: 0 0 0.5rem;
  }

  input {
    padding: 1rem;
    outline: none;
  }

  p {
    color: red;
  }
`;
