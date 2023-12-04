import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import FilterBox from "components/FilterAndSortBox"; 
import { CloseSVG } from "../../assets/images";

const ServicelistPage = () => {
  const navigate = useNavigate();

  const [textfieldvalue, setTextfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex md:flex-col gap-5 h-20 md:h-auto items-center justify-center p-5 md:px-5 shadow-bs2 w-full" />
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtRobotoBold40"
            >
              Find Trusted Local Service Providers
            </Text>
            <Text
              className="leading-[24.00px] max-w-[520px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoRegular16"
            >
              Browse through a wide range of services offered by reliable
              providers in your area.
            </Text>
            <Input
              name="textfield"
              placeholder="Type here"
              value={textfieldvalue}
              onChange={(e) => setTextfieldvalue(e)}
              className="!placeholder:text-black-900_7f !text-black-900_7f font-roboto p-0 text-left text-sm h-9 w-[360px] "
              wrapClassName="flex sm:w-full"
              shape="round"
              color="black_900_19"
              size="xs"
              variant="outline"
            ></Input>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-medium text-base text-center w-40"
                shape="round"
                onClick={() => navigate("/searchresult")}
              >
                Search
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Popular Services
            </Text>
            <div className="flex flex-col items-center justify-center py-5 w-full">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                      className="leading-[24.00px] max-w-[382px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      Find experienced plumbers for all your plumbing needs.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                      Electrician
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[382px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      Hire reliable electricians to solve your electrical
                      issues.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                      Cleaning
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[382px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      Get professional cleaners to keep your space spotless.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center p-4 rounded-md w-full">
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
                      Landscaping
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[382px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      Transform your outdoor spaces with expert landscaping
                      services.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <List
          className="flex flex-col gap-px items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                size="txtRobotoBold40"
              >
                All Services
              </Text>
              <FilterBox/>
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center py-5 w-full">
                <div
                  className="common-pointer border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full"
                  onClick={() => navigate("/serviceproviderprofile")}
                >
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[120px] md:pr-10 sm:pr-5 pr-[120px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[71px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        Top Rated
                      </Button>
                      <Text
                        className="mb-[41px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Plumbing Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Plumbing
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Save 10% on your first plumbing service booking.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[138px] h-[340px] items-center justify-start pb-[117px] md:pr-10 sm:pr-5 pr-[117px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[40px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        New
                      </Button>
                      <Text
                        className="mb-[45px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Electrician Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Electrician
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Flat $50 off on any electrical service.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[122px] md:pr-10 sm:pr-5 pr-[122px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[89px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        Most Popular
                      </Button>
                      <Text
                        className="mb-[39px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Cleaning Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Cleaning
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Get a free deep cleaning on booking weekly cleaning
                      services.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1100px] mx-auto w-full">
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center py-5 w-full">
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[120px] md:pr-10 sm:pr-5 pr-[120px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[71px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        Top Rated
                      </Button>
                      <Text
                        className="mb-[41px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Plumbing Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Plumbing
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Save 10% on your first plumbing service booking.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[138px] h-[340px] items-center justify-start pb-[117px] md:pr-10 sm:pr-5 pr-[117px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[40px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        New
                      </Button>
                      <Text
                        className="mb-[45px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Electrician Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Electrician
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Flat $50 off on any electrical service.
                    </Text>
                  </div>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                  <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                    <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[122px] md:pr-10 sm:pr-5 pr-[122px] w-[340px]">
                      <Button
                        className="cursor-pointer font-medium min-w-[89px] rounded-br-md rounded-tl-md text-center text-xs"
                        color="black_900_0c"
                        size="xs"
                      >
                        Most Popular
                      </Button>
                      <Text
                        className="mb-[39px] text-black-900 text-center text-xs"
                        size="txtRobotoRegular12"
                      >
                        Cleaning Services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Cleaning
                    </Text>
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtRobotoMedium20"
                    >
                      Get a free deep cleaning on booking weekly cleaning
                      services.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </List>
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

export default ServicelistPage;
