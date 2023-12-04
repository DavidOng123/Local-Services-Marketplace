import React from "react";

import { Img, Line, Text } from "components";
import Header from "components/Header";

const NotificationPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
              size="txtRobotoBold40"
            >
              Notifications
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-start justify-center max-w-[1100px] mx-auto py-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  Later have a booking at 12:00pm.
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center py-3 w-full">
          <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 md:px-5 rounded-[50%] w-[100px]">
            <Img
              className="h-[74px] md:h-auto object-cover w-[93%]"
              src="images/img_icon_74x70.png"
              alt="icon_One"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              David wanted to change the booking time
            </Text>
          </div>
        </div>
        <footer className="flex items-center justify-center p-[60px] md:px-5 w-full">
          <div className="flex flex-col h-[100px] md:h-auto items-center justify-center w-auto">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              © 2023 Local Services Marketplace. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NotificationPagePage;
