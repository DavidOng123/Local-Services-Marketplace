import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";

const ServiceProviderHomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Pending Booking
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <List
            className="sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1100px] mx-auto py-5 w-full"
            orientation="horizontal"
          >
            <div
              className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
              onClick={() => navigate("/bookingstatuschangingdialog")}
            >
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_1.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  John Doe
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  123 Main St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-01 09:00
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_1.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  Jane Smith
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  456 Elm St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-02 14:00
              </Text>
            </div>
          </List>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Upcoming Booking
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <List
            className="sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1100px] mx-auto py-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_1.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  John Doe
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  123 Main St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-01 09:00
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_1.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  Jane Smith
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  456 Elm St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-02 14:00
              </Text>
            </div>
          </List>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Completed Booking
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <List
            className="sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1100px] mx-auto py-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_2.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  Mark Johnson
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  789 Oak St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-03 10:30
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
              <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                <Img
                  className="h-[74px] md:h-auto object-cover w-[93%]"
                  src="images/img_icon_2.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoRegular20"
                >
                  Sarah Williams
                </Text>
                <Text
                  className="text-base text-black-900_7f text-center w-full"
                  size="txtRobotoRegular16Black9007f"
                >
                  987 Pine St
                </Text>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                size="txtRobotoMedium28"
              >
                2022-01-04 16:00
              </Text>
            </div>
          </List>
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

export default ServiceProviderHomePagePage;
