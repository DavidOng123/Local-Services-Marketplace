import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const SearchresultPage = () => {
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
              Search Results
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Showing service providers matching your search criteria
            </Text>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Service Providers
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full"
                onClick={() => navigate("/serviceproviderprofile")}
              >
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon_3.png"
                    alt="icon"
                  />
                </div>
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
                    Rating: 4.5
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                  size="txtRobotoMedium28"
                >
                  Service Description
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon_3.png"
                    alt="icon"
                  />
                </div>
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
                    Rating: 4.2
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                  size="txtRobotoMedium28"
                >
                  Service Description
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center justify-center py-3 w-full">
                <div className="bg-black-900_0c flex flex-col h-[100px] items-center justify-end p-3 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[93%]"
                    src="images/img_icon_3.png"
                    alt="icon"
                  />
                </div>
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
                    Rating: 4.0
                  </Text>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
                  size="txtRobotoMedium28"
                >
                  Service Description
                </Text>
              </div>
            </List>
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

export default SearchresultPage;
