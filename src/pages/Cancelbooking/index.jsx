import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Line, Text } from "components";

const CancelbookingPage = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleYesClick = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      navigate("/");
    }, 3000); 
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Cancel the Booking?
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Tell us why?
            </Text>
            <div className="flex flex-col items-start justify-center w-[360px]">
              <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col items-center justify-start px-3 py-2 rounded-md w-full">
                <Text
                  className="text-black-900_7f text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  Why?
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => navigate("/bookingpage")}
                shape="round"
                variant="outline"
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                onClick={() => handleYesClick()}
                shape="round"
              >
                Yes
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        {showSuccessMessage && (
          <div className="flex items-center justify-center w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Booking successfully canceled!
            </Text>
          </div>
        )}
      </div>
    </>
  );
};

export default CancelbookingPage;
