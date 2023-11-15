import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="bg-black-900_19 h-10 rounded-[50%] w-10"></div>
        <Text
          className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
          size="txtRobotoMedium28"
        >
          Local Services Marketplace
        </Text>
        <ul className="bg-white-A700 flex flex-row gap-10 sm:hidden items-center justify-center w-auto common-row-list">
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/serviceproviderhomepage")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/serviceprovidersideprofile")}
            >
              Profile
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/notificationpage")}
            >
              Notification
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/")}
            >
              Logout
            </Text>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
