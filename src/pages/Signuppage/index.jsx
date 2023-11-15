import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const SignuppagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtRobotoBold40"
                >
                  Join our Local Services Marketplace
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Create an account to access local service providers
                </Text>
              </div>
              <Img
                className="flex-1 h-[400px] max-h-[400px] sm:w-[] md:w-[]"
                src="images/img_imagecontainer_blue_gray_100.svg"
                alt="imagecontainer"
              />
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Sign Up
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
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                  shape="round"
                  color="white_A700"
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
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Password
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Password must be at least 8 characters
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Confirm Password
                </Text>
                <Input
                  name="textfield_Four"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_19 border-solid flex h-9 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/loginpage")}
                  shape="round"
                >
                  Sign Up
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

export default SignuppagePage;
