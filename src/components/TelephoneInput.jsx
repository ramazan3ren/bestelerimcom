import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useContext } from "react";
import Context from "@/context/context";

export const TelephoneInput = ({labelError}) => {
  const { phone, handlePhone } = useContext(Context);

  return (
    <div className="w-full mb-3">
      <MuiTelInput
        value={phone}
        onChange={handlePhone}
        helperText={labelError}
        color="error"
        sx={{ width: "100%" }}
        required
        label="Telefon Numaranız"
        inputProps={{ maxLength: 20 }}
        defaultCountry="TR"
      />
    </div>
  );
};
