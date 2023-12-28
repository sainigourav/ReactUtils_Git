import React, { FC, Fragment } from "react";
import { InputProps } from "./Input.types";
const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Fragment>
    <input />
    </Fragment>
  );
};

export default Input;