import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";

const ReschedulebookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
            size="txtRobotoBold40"
          >
            Reschedule Details
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start md:px-5 w-[42%] md:w-full">
            <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
              <Text
                className="text-black-900 text-sm w-full"
                size="txtRobotoMedium14"
              >
                Date
              </Text>
              <Input
                name="textfield"
                placeholder="Select date"
                className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid w-full"
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
                Time
              </Text>
              <Input
                name="textfield_One"
                placeholder="Select time"
                className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid w-full"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/bookingdetails")}
                shape="round"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/bookingdetails")}
                shape="round"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReschedulebookingPage;
