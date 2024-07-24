import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export const CopyComponent = ({ value, inputLabel }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="w-full mb-3">
      <CopyToClipboard
        text={value}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel>{inputLabel}</InputLabel>
          <OutlinedInput
            type={"text"}
            value={value}
            disabled
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <ContentCopyRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Ödeme Yapacağınız IBAN"
          />
        </FormControl>
      </CopyToClipboard>
    </div>
  );
};
