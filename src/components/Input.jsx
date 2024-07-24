import React from "react";
import { TextField } from "@mui/material";

export const Input = ({
  error,
  name,
  onChange,
  label,
  labelError,
  color,
  type,
  isMultiline,
  disabled,
  maxRows,
  maxLength,
  minRows,
  value,
  placeholder,
}) => {
  return (
    <>
      <div className="w-full mb-3">
        <TextField
          required
          error={value != null ? true : false}
          type={type}
          sx={{
            width: "100%",
          }}
          name={name}
          value={value}
          color={color}
          multiline={isMultiline}
          inputProps={{ maxLength: maxLength }}
          maxRows={maxRows}
          disabled={disabled}
          minRows={minRows}
          onChange={onChange}
          label={label}
          placeholder={placeholder}
          helperText={error != null ? labelError : ""}
          variant="outlined"
        />
      </div>
    </>
  );
};
