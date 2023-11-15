import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const LoginpagePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Welcome Back
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Login to your account
            </Text>
            <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
              <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
                <Input
                  name="emailaddress"
                  placeholder="Email address"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="email"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-center mt-6 w-[360px] sm:w-full">
                <Input
                  name="password"
                  placeholder="Password"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="password"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-6 w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/")}
                  shape="round"
                >
                  Sign In
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start mt-6 w-auto">
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                  onClick={() => navigate("/signuppage")}
                  shape="round"
                  color="white_A700"
                >
                  Sign Up
                </Button>
              </div>
              <a className="mt-[27px] text-base text-center text-indigo-A700 w-auto">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular16IndigoA700"
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot Password?
                </Text>
              </a>
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

export default LoginpagePage;
