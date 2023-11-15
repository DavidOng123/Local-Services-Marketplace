import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const BookingSuccessfulpagePage = () => {
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
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Booking Successful!
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Congratulations on booking a trusted local service provider.
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
              Booking Details
            </Text>
            <div className="flex flex-col items-center justify-center py-5 w-full">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_imagecontainer.svg"
                    alt="imagecontainer"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Service Provider
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Service Provider Name
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      John Doe
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_imagecontainer.svg"
                    alt="imagecontainer"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Service
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Plumbing
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_imagecontainer.svg"
                    alt="imagecontainer"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Date
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      October 10, 2022
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_imagecontainer.svg"
                    alt="imagecontainer"
                  />
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Time
                    </Text>
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      12:00 PM - 2:00 PM
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="bg-black-900_99 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="bg-blue_gray-100_7f h-[100px] md:mt-0 my-1 rounded-[50%] w-[100px]"></div>
              <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtRobotoBold24WhiteA700"
                >
                  John Doe
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="bg-blue_gray-100_7f border border-black-900_19 border-solid justify-center px-1 py-0.5 rounded-sm text-black-900 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    Plumber
                  </Text>
                </div>
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtRobotoRegular16WhiteA700"
                >
                  Contact information and additional details about the service
                  provider
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  color="white_A700"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Contact
                </Button>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
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

export default BookingSuccessfulpagePage;
