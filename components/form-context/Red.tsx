import styled from "@emotion/styled";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../Input";

export default function Red() {
  const { control } = useFormContext();

  return (
    <StyledRed>
      <Controller
        control={control}
        render={({ field, formState }) => (
          <Input
            onChange={field.onChange}
            name={"redName"}
            value={field.value}
          />
        )}
        name={"redName"}
      />
      <Controller
        control={control}
        render={({ field, formState }) => (
          <Input
            onChange={field.onChange}
            name={"redEmail"}
            value={field.value}
          />
        )}
        name={"redEmail"}
      />
    </StyledRed>
  );
}

const StyledRed = styled.div`
  width: 25rem;
  margin: 1rem auto 0;
  background: indianred;
`;
