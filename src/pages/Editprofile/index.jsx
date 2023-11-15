import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const EditprofilePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full">
          <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[15%] md:w-full">
            <div className="bg-black-900_19 h-10 rounded-[50%] w-10"></div>
            <Text
              className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
              size="txtRobotoMedium28"
            >
              Edit Profile
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-5 h-20 md:h-auto items-center justify-center max-w-[1440px] p-5 shadow-bs2 w-full">
            <div className="bg-black-900_19 h-10 rounded-[50%] w-10"></div>
            <Text
              className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
              size="txtRobotoMedium28"
            >
              Local Services Marketplace
            </Text>
            <ul className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-10 sm:hidden items-center justify-center w-auto sm:w-full common-row-list">
              <li>
                <a className="text-base text-black-900">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a className="text-base text-black-900">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/servicelist")}
                  >
                    Services
                  </Text>
                </a>
              </li>
              <li>
                <a className="text-base text-black-900">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/bookingpage")}
                  >
                    Bookings
                  </Text>
                </a>
              </li>
              <li>
                <a className="text-base text-black-900">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular16"
                    onClick={() => navigate("/userprofile")}
                  >
                    Profile
                  </Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Input
                    name="textfield"
                    placeholder="Search in site"
                    value={textfieldvalue}
                    onChange={(e) => setTextfieldvalue(e)}
                    className="!placeholder:text-black-900_7f !text-black-900_7f p-0 text-left text-sm w-full"
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
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Edit Profile
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Name
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Enter your name"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Email
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="Enter your email"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="email"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  onClick={() => navigate("/userprofile")}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <footer className="flex items-center justify-center p-[60px] md:px-5 w-full">
          <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              © 2022 Local Services Marketplace. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EditprofilePage;
