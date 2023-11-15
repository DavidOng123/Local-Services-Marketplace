import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const ServiceprovidereditprofilepagePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
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
                    Personal Information
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                          Name
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter your name
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_One"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Description
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter a brief description
                        </Text>
                      </div>
                    </div>
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
                    Services
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                          Services Provided
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter services provided
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_One"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Service Time Range
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter service time range
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Two"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Attractive Words
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter attractive words
                        </Text>
                      </div>
                    </div>
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
                    Contact Information
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-center py-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                          Phone
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter your phone number
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_One"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Email
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter your email
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border border-black-900_19 border-solid flex sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
                      <Img
                        className="h-[100px] w-[100px]"
                        src="images/img_imagecontainer.svg"
                        alt="imagecontainer_Two"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl w-full"
                          size="txtRobotoMedium20"
                        >
                          Location
                        </Text>
                        <Text
                          className="text-black-900_7f text-sm w-full"
                          size="txtRobotoRegular14"
                        >
                          Enter your location
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_19 h-px w-full" />
            </div>
          </div>
        </List>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Save Changes
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-medium text-base text-center w-40"
                shape="round"
                onClick={() => navigate("/serviceprovidersideprofile")}
              >
                Save
              </Button>
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

export default ServiceprovidereditprofilepagePage;
