import Context from "@/context/context";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useContext } from "react";

export const AlertDialog = () => {
  const { fullScreen, openAlertDialog, handleClose } = useContext(Context);
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openAlertDialog}
        onClose={handleClose}
        className="select-none"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Gönderim Başarılı"}</DialogTitle>
        <DialogContent>
          Şiiriniz başarılı bir şekilde gönderilmiştir. En kısa zamanda sizinle iletişime geçilecektir.
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#dc272b" }} onClick={handleClose} autoFocus>
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
