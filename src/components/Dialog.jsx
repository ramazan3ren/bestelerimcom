import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import Context from "@/context/context";
import { Button } from "@mui/material";

export const KvkkDialog = () => {
  const { fullScreen, handleDialogClose, openDialog, handleIagree } =
    useContext(Context);

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={handleDialogClose}
        className="select-none"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"6698 Sayılı Kişisel Verilerin Korunması Kanunu"}
        </DialogTitle>
        <DialogContent>
          <ul className="p-5 list-disc text-primaryColor font-bold">
            <li>
              Saat 08.00-17:00 arası verilen siparişler gün içerisinde teslim
              edilir. Bu saatler dışında oluşturulacak siparişler ertesi gün
              teslim edilir. Ancak firmamızdan kaynaklanmayan teknik sorunlar
              durumunda ilgili müşteriye bilgi vermek suretiyle teslimatta
              gecikme olabilir. Zamanında teslim edilemeyen siparişler için
              ücret iadesi sağlanır.
            </li>
            <br />
            <li>
              İletilen şiir yada sözler içerisinde küfür, taciz, tehdit gibi
              yasal sonuçlar ortaya çıkaran kelimeler geçmesi durumunda,
              firmamız ilgili kelimelerde değişiklik yapma, yada ilgili şiir/söz
              için beste yapmama hakkına haizdir.
            </li>
            <br />
            <li>
              Güfte, söz, yada şiir bir başkasına ait/alıntı olması durumunda
              yasal sorumluluk müşteriye aittir.
            </li>
            <br />
            <li>
              Yapay zeka tarafından oluşturulan tamamen özgün olan bestenin
              telif hakkı müşteriye aittir.
            </li>
            <br />
            <li>
              Müşteri tarafından iletilen söz ve şiirlere beste tamamen yapay
              zeka tarafından yapılmakta olup, beste üzerinde düzenleme,
              değiştirme imkanı bulunmamaktadır.
            </li>
            <br />
            <li>
              Beste oluşturulduktan sonra, söz veya şiir üzerinde değişiklik
              yapılarak oluşturulacak beste talebi, yeni beste olarak kabul
              edilerek ayrıca ücretlendirilir.
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#dc272b" }}
            autoFocus
            onClick={handleDialogClose}
          >
            Reddediyorum
          </Button>
          <Button sx={{ color: "#16a349" }} onClick={handleIagree} autoFocus>
            Kabul Ediyorum
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
