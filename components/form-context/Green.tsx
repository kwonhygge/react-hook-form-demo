import styled from "@emotion/styled";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../Input";

export default function Green() {
  const { control } = useFormContext();

  return (
    <StyledGreen>
      <Controller
        control={control}
        render={({ field, formState }) => (
          <Input
            onChange={field.onChange}
            name={"greenName"}
            value={field.value}
          />
        )}
        name={"greenName"}
      />
      <Controller
        control={control}
        render={({ field, formState }) => (
          <Input
            onChange={field.onChange}
            name={"greenEmail"}
            value={field.value}
          />
        )}
        name={"greenEmail"}
      />
    </StyledGreen>
  );
}

const StyledGreen = styled.div`
  width: 25rem;
  margin: 0 auto;
  background: darkolivegreen;
`;
