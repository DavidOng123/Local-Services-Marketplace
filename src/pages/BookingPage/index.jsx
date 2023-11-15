import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const BookingPagePage = () => {
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
              Your Bookings
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Track your booking progress
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                    size="txtRobotoBold40"
                  >
                    Upcoming Bookings
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
                  <div
                    className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
                    onClick={() => navigate("/bookingdetails")}
                  >
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Service Provider 1
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Service Name
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] max-w-[240px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                      size="txtRobotoMedium28"
                    >
                      Date: 10/25/2022, Time: 10:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Service Provider 2
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Service Name
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] max-w-[240px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                      size="txtRobotoMedium28"
                    >
                      Date: 10/26/2022, Time: 2:30 PM
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                    size="txtRobotoBold40"
                  >
                    Completed Bookings
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-10 items-start justify-center py-5 w-full">
                  <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Service Provider 3
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Service Name
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] max-w-[240px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                      size="txtRobotoMedium28"
                    >
                      Date: 10/20/2022, Time: 3:00 PM
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoRegular20"
                      >
                        Service Provider 4
                      </Text>
                      <Text
                        className="text-base text-black-900_7f text-center w-full"
                        size="txtRobotoRegular16Black9007f"
                      >
                        Service Name
                      </Text>
                    </div>
                    <Text
                      className="leading-[36.00px] max-w-[240px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                      size="txtRobotoMedium28"
                    >
                      Date: 10/21/2022, Time: 1:00 PM
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
          </div>
        </List>
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

export default BookingPagePage;
