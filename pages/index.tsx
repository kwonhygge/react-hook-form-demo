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
import { emailRule } from "../utils/rule";

interface FormData {
  age: number;
  birthDate?: Date;
  email: string;
  firstName: string;
  profile?: File;
}

export default function Home() {
  const defaultValues: FormData = {
    age: 0,
    email: "",
    firstName: "",
  };

  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState,
    getValues,
    setValue,
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { errors, isDirty, isValid } = formState;

  console.log(errors);

  const onSubmit = () => {
    console.log(getValues());
  };

  const handleClose = () => {
    if (isDirty) {
      alert("입력중인 필드가 있습니다.");
    } else {
      alert("창닫힘");
    }
  };

  const handleSetValue = () => {
    setValue(FIRST_NAME, "현경");
  };

  const handleGetServerData = () => {
    reset(
      {
        [FIRST_NAME]: "현경",
        [AGE]: 15,
        [EMAIL]: "hyunkyung.kwon@illuminarean.com",
      },
      { keepDefaultValues: true }
    );
  };

  return (
    <form>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>React Hook Form</h1>
          <StyledIndex>
            <StyledInputContainer>
              <Controller
                control={control}
                render={({ field, formState }) => (
                  <Input
                    name={FIRST_NAME}
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={formState.errors?.[FIRST_NAME]?.message}
                  />
                )}
                rules={{
                  required: { value: true, message: EMPTY_ERROR },
                  pattern: { value: RegexUtil.REG_NAME, message: FORMAT_ERROR },
                  maxLength: { value: 15, message: MAX_LENGTH_ERROR },
                }}
                name={FIRST_NAME}
              />
              <Controller
                control={control}
                render={({ field: { name, onChange, value }, formState }) => (
                  <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    errorMessage={formState.errors?.[EMAIL]?.message}
                  />
                )}
                rules={{
                  ...emailRule,
                  maxLength: { value: 15, message: "max exceed" },
                }}
                name={EMAIL}
              />
              <Controller
                control={control}
                render={({
                  field: { name, onChange, value },
                  formState: { errors },
                }) => (
                  <Input
                    name={name}
                    onChange={onChange}
                    value={value}
                    errorMessage={errors?.[AGE]?.message}
                  />
                )}
                rules={{
                  min: { value: 3, message: MIN_ERROR },
                  max: { value: 15, message: MAX_ERROR },
                }}
                name={AGE}
              />
            </StyledInputContainer>
            <StyledDescription>
              <p>firstName is: {watch(FIRST_NAME)}</p>
              <h3>형식</h3>
              <p>firstName: 필수값, 영문, 최대 길이 15</p>
              <p>email: 필수값, 이메일 형식</p>
              <p>age: 3~15 사이</p>
            </StyledDescription>
          </StyledIndex>
          <StyledButtonContainer>
            <StyledWarningButton onClick={() => reset()} type={"button"}>
              Clear
            </StyledWarningButton>
            <StyledPrimaryButton
              onClick={handleSubmit(onSubmit)}
              type={"button"}
            >
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
