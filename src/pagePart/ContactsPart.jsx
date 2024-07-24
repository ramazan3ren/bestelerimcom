import React from "react";
import { ContactsItem } from "@/layouts/ContactsLayout";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { Element } from "react-scroll";

export const ContactsPart = () => {
  const contacts = [
    {
      id: "1",
      title: "Mail",
      contact: "istiklalmarsi1921@gmail.com",
      href: "mailto:istiklalmarsi1921@gmail.com",
      Icon: () => <EmailRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "2",
      title: "Telefon",
      contact: "+90 501 132 1090",
      href: "tel:+905011321090",
      Icon: () => <CallRoundedIcon sx={{ fontSize: 70 }} />,
    },
  ];

  return (
    <>
      <Element
        name="iletisim"
        className="w-full element flex flex-col tablet:flex-row"
      >
        <div className="w-full bg-whiteBG dark:bg-black gap-14 grid grid-flow-row md:grid-col-2 md:grid-flow-col items-center justify-center py-14 px-0 lg:px-4 lg:py-24 ">
          {contacts.map((contactsItem) => {
            return (
              <ContactsItem
                detail={contactsItem}
                key={contactsItem.id}
                Icon={contactsItem.Icon}
              />
            );
          })}
        </div>
      </Element>
    </>
  );
};
