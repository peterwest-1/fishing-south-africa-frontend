import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { useField } from "formik";
import { FormControl, FormLabel, Input, FormErrorMessage, Textarea, FormHelperText } from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  helper?: string;
  isRequired?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  helper,
  isRequired = false,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} type={type} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </FormControl>
  );
};
