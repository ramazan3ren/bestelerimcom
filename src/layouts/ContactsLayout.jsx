import React from "react";

export const ContactsItem = ({ detail, Icon }) => {
  return (
    <>
      <a href={detail.href}>
        <div className="flex flex-col col-span-2 w-44 transition-all hover:text-primaryColor hover:dark:text-primaryColor whitespace-nowrap items-center justify-center text-darkThemeColor dark:text-white py-4 px-5">
          <div className="mb-1 lg:mb-4 ">
            <Icon />
          </div>
          <div className="text-2xl font-josefin font-bold mb-2">
            {detail.title}
          </div>

          <div className="md:text-xl font-bold font-josefin">
            {detail.contact}
          </div>
        </div>
      </a>
    </>
  );
};
