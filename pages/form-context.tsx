import { FormProvider, useForm } from "react-hook-form";
import Red from "../components/form-context/Red";
import Green from "../components/form-context/Green";
import { StyledPrimaryButton } from "../styles/common";

interface FormData {
  redName: string;
  redEmail: string;
  greenName: string;
  greenEmail: string;
}

const defaultValues: FormData = {
  redName: "",
  redEmail: "",
  greenName: "",
  greenEmail: "",
};

function FormContext() {
  const methods = useForm({ defaultValues, mode: "onChange" });

  const { handleSubmit, getValues } = methods;

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <FormProvider {...methods}>
      <Red />
      <Green />
      <StyledPrimaryButton type={"button"} onClick={handleSubmit(onSubmit)}>
        Submit
      </StyledPrimaryButton>
    </FormProvider>
  );
}

export default FormContext;
