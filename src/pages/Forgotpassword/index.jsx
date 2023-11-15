import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const ForgotpasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Forgot Your Password?
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Enter your email address to receive a password reset link.
            </Text>
            <div className="flex flex-col items-start justify-center w-[360px] sm:w-full">
              <Input
                name="textfield"
                placeholder="Email"
                className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid w-full"
                type="email"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/loginpage")}
                shape="round"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-40"
                shape="round"
              >
                Reset
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
