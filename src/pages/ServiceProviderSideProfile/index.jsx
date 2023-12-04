import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const ServiceProviderSideProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="bg-black-900_99 flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRobotoBold40WhiteA700"
            >
              Service Provider Profile
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="bg-blue_gray-100_7f h-[100px] rounded-[50%] w-[100px]"></div>
              <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  John Smith
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
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  Experienced and reliable plumber with over 10 years of
                  experience.
                </Text>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
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
                          Plumbing
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                          size="txtRobotoRegular16"
                        >
                          Offering a wide range of plumbing services including
                          repairs, installations, and maintenance.
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
                          Emergency Services
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Available 24/7 for emergency plumbing situations.
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
                          Quality Workmanship
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                          size="txtRobotoRegular16"
                        >
                          Ensuring customer satisfaction through high-quality
                          workmanship and attention to detail.
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
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          123-456-7890
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
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          johnsmith@example.com
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
                          className="text-base text-black-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          123 Main St, City, State
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
        <Button
          className="common-pointer cursor-pointer font-medium text-base text-center w-40"
          onClick={() => navigate("/serviceprovidereditprofilepage")}
          shape="round"
        >
          Edit
        </Button>
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

export default ServiceProviderSideProfilePage;
