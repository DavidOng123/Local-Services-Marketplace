import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const UserprofilePage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="bg-black-900_99 flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRobotoBold40WhiteA700"
            >
              Welcome to Your Profile
            </Text>
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtRobotoRegular16WhiteA700"
            >
              Manage your profile, preferences, and bookings.
            </Text>
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
                    Verified
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  color="white_A700"
                  variant="outline"
                >
                  Change Password
                </Button>
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  onClick={() => navigate("/editprofile")}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Booking History
                </Text>
              </div>
              <List
                className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-60 md:h-auto items-start justify-start w-60">
                    <div className="bg-blue_gray-100_7f flex flex-col h-60 items-center justify-center p-[81px] md:px-10 sm:px-5 w-60">
                      <Text
                        className="my-[30px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Service Image
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Plumbing Service
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      August 15, 2021
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-60 md:h-auto items-start justify-start w-60">
                    <div className="bg-blue_gray-100_7f flex flex-col h-60 items-center justify-center p-[81px] md:px-10 sm:px-5 w-60">
                      <Text
                        className="my-[30px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Service Image
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      House Cleaning
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      July 30, 2021
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  Personal Information
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="common-pointer cursor-pointer font-medium text-base text-center w-40"
                    onClick={() => navigate("/editprofile")}
                    shape="round"
                  >
                    Edit Information
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-1 flex-col gap-10 items-center py-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
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
                        className="text-base text-black-900 w-full"
                        size="txtRobotoRegular16"
                      >
                        John Doe
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
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
                        Email
                      </Text>
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtRobotoRegular16"
                      >
                        johndoe@example.com
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
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
              Preferences
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-center justify-start w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Location
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="cursor-pointer rounded-md text-center text-sm w-16"
                    shape="round"
                    color="black_900_0c"
                    size="sm"
                  >
                    Nearby
                  </Button>
                  <Button
                    className="cursor-pointer rounded-md text-center text-sm w-16"
                    shape="round"
                    color="black_900_0c"
                    size="sm"
                  >
                    City
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[65px] rounded-md text-center text-sm"
                    shape="round"
                    color="black_900_0c"
                    size="sm"
                  >
                    Custom
                  </Button>
                </div>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Select your preferred service location
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Notification
                </Text>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="sm"
                  >
                    On
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 rounded-md text-center text-sm w-full"
                    shape="round"
                    color="black_900_0c"
                    size="sm"
                  >
                    Off
                  </Button>
                </div>
                <Text
                  className="text-black-900_7f text-xs w-full"
                  size="txtRobotoRegular12Black9007f"
                >
                  Choose to receive notifications
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] h-[100px] md:h-auto items-center justify-center w-auto">
            <Text
              className="text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
            >
              About Us
            </Text>
            <Text
              className="common-pointer text-black-900 text-center text-xl w-full"
              size="txtRobotoRegular20"
              onClick={() => navigate("/helppage")}
            >
              Help & Support
            </Text>
            <a
              href="javascript:"
              className="text-black-900 text-center text-xl w-full"
            >
              <Text size="txtRobotoRegular20">Terms of Service</Text>
            </a>
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

export default UserprofilePage;
