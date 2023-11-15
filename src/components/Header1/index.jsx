import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header1 = (props) => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

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
        <ul className="bg-white-A700 flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center w-auto sm:w-full common-row-list">
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/servicelist")}
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/bookingpage")}
            >
              Bookings
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-base text-black-900"
              size="txtRobotoRegular16"
              onClick={() => navigate("/userprofile")}
            >
              Profile
            </Text>
          </li>
          <li>
            <Input
              name="textfield"
              placeholder="Search in site"
              value={textfieldvalue}
              onChange={(e) => setTextfieldvalue(e)}
              className="!placeholder:text-black-900_7f !text-black-900_7f font-roboto p-0 text-left text-sm w-full"
              wrapClassName="flex sm:w-full"
              suffix={
                <li>
                  {textfieldvalue?.length>0?(
                  <CloseSVG
                    className="cursor-pointer h-5 ml-[35px] my-auto"
                    onClick={() => setTextfieldvalue("")}
                    fillColor="#0000007f"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                  ):(
                  <Img
                    className="cursor-pointer h-5 ml-[35px] my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  )}
                </li>
              }
              shape="round"
              color="black_900_19"
              size="xs"
              variant="outline"
            ></Input>
          </li>
        </ul>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
