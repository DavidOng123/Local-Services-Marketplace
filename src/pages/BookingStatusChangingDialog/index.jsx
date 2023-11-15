import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import BookingStatusChangingDialogColumnstatus from "components/BookingStatusChangingDialogColumnstatus";

const listboxmainOptionsList = [
  { label: "Accept", value: "Accept" },
  { label: "Change Time", value: "Change Time" },
  { label: "Cancel", value: "Cancel" },
];

const BookingStatusChangingDialogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1127px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-[27%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoBold40"
              >
                Status Changing
              </Text>
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoRegular16"
              >
                Change the booking status
              </Text>
              <BookingStatusChangingDialogColumnstatus className="flex flex-col font-montserrat items-center justify-start pb-[13px] px-[13px] w-full" />
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/serviceproviderhomepage")}
                shape="round"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/serviceproviderhomepage")}
                shape="round"
              >
                Change
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
      </div>
    </>
  );
};

export default BookingStatusChangingDialogPage;
