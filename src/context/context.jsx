import { createContext, useState, useEffect } from "react";
import useDarkSide from "@/hooks/useDarkSide";
import LogoBlack from "@/assets/bestelerim-logo-black.png";
import LogoWhite from "@/assets/bestelerim-logo-white.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Context = createContext();

function ProviderContextAPI({ children }) {
  //* windowSize
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimensions]);

  //! windowSize

  //* menu < >

  const [colorTheme, setTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const [isOpen, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [logo, setLogo] = useState(
    colorTheme === "light" ? LogoWhite : LogoBlack
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    setLogo(colorTheme === "light" ? LogoBlack : LogoWhite);
  };

  //! menu < >

  //* Dialog < >
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setIsChecked(false);
  };
  const handleIagree = () => {
    setOpenDialog(false);
    setIsChecked(true);
  };

  const [phone, setPhone] = useState("");

  const handlePhone = (newValue) => {
    setPhone(newValue);
  };

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  //! Dialog < >

  const sharedValue = {
    colorTheme,
    darkSide,
    setDarkSide,
    setTheme,
    toggleDarkMode,
    logo,
    isOpen,
    setOpen,
    openMobileMenu,
    windowDimensions,
    setOpenMobileMenu,
    openDialog,
    fullScreen,
    handleDialogOpen,
    handleDialogClose,
    isChecked,
    setIsChecked,
    handleIagree,
    phone,
    setPhone,
    setIsChecked,
    handlePhone,
    handleClose,
    openAlertDialog,
    setOpenAlertDialog,
  };
  return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export { ProviderContextAPI };
export default Context;
