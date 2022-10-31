import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/Input";
import RegexUtil from "../utils/regex";
import {
  EMPTY_ERROR,
  FORMAT_ERROR,
  MAX_ERROR,
  MAX_LENGTH_ERROR,
  MIN_ERROR,
} from "../constants/message";
import { StyledPrimaryButton, StyledWarningButton } from "../styles/common";
import { AGE, EMAIL, FIRST_NAME } from "../constants/common";

export default function Test() {
  const onSubmit = () => {};

  const handleClose = () => {};

  const handleSetValue = () => {};

  const handleGetServerData = () => {};

  return (
    <form>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>React Hook Form</h1>
          <StyledIndex>
            <StyledInputContainer>
              <Input
                name={FIRST_NAME}
                onChange={() => {}}
                value={""}
                errorMessage={""}
              />
              <Input
                onChange={() => {}}
                name={EMAIL}
                value={""}
                errorMessage={""}
              />
              <Input
                onChange={() => {}}
                name={AGE}
                value={0}
                errorMessage={""}
              />
            </StyledInputContainer>
            <StyledDescription>
              <p>firstName is: </p>
            </StyledDescription>
          </StyledIndex>
          <StyledButtonContainer>
            <StyledWarningButton onClick={() => {}} type={"button"}>
              Clear
            </StyledWarningButton>
            <StyledPrimaryButton onClick={() => {}} type={"button"}>
              Submit
            </StyledPrimaryButton>
            <button onClick={handleClose} type={"button"}>
              창닫기
            </button>
            <button onClick={handleSetValue} type={"button"}>
              현경
            </button>
            <button onClick={handleGetServerData} type={"button"}>
              Get server data
            </button>
          </StyledButtonContainer>
        </main>
      </div>
    </form>
  );
}

const StyledIndex = styled.div`
  margin: 5rem 0 0;
  display: flex;
`;

const StyledInputContainer = styled.div``;

const StyledDescription = styled.div`
  margin: 0 0 0 5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;

  button {
    margin: 0 0 0 1rem;
  }
`;
