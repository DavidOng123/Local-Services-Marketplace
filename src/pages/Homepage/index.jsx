import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const HomepagePage = () => {
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
              Welcome to the Local Services Marketplace App!
            </Text>
            <div className="flex flex-col gap-[25px] items-center justify-start w-[31%] md:w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoRegular16"
              >
                Find trusted local service providers with ease.
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  variant="outline"
                >
                  Learn More
                </Button>
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Get Started
                </Button>
              </div>
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
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-medium text-base text-center w-40"
                shape="round"
              >
                View All Services
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center py-5 w-full"
              orientation="horizontal"
            >
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[121px] md:pr-10 sm:pr-5 pr-[121px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      5 stars
                    </Button>
                    <Text
                      className="mb-10 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Image Description
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
                    1234 5th Street
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[121px] md:pr-10 sm:pr-5 pr-[121px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[64px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      4.5 stars
                    </Button>
                    <Text
                      className="mb-10 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Image Description
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
                    4567 8th Avenue
                  </Text>
                </div>
              </div>
              <div className="border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start rounded-md w-full">
                <div className="flex flex-col h-[340px] md:h-auto items-start justify-start w-[340px]">
                  <div className="bg-blue_gray-100_7f flex flex-col md:gap-10 gap-[139px] h-[340px] items-center justify-start pb-[121px] md:pr-10 sm:pr-5 pr-[121px] w-[340px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] rounded-br-md rounded-tl-md text-center text-xs"
                      color="black_900_0c"
                      size="xs"
                    >
                      4 stars
                    </Button>
                    <Text
                      className="mb-10 text-black-900 text-center text-xs"
                      size="txtRobotoRegular12"
                    >
                      Image Description
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start p-3 w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    Landscaping
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoMedium20"
                  >
                    7890 1st Road
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Line className="bg-black-900_19 h-px w-full" />
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1100px] mx-auto md:px-5 w-full">
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                  size="txtRobotoBold40"
                >
                  How It Works
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium text-base text-center w-40"
                    shape="round"
                  >
                    Learn More
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
                        Browse Services
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Find the service you need by browsing through our
                        extensive categories.
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
                        Schedule Appointment
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Book an appointment directly with the service provider
                        at a time that is convenient for you.
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
                        Transparent Reviews
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[372px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        <>
                          Read user reviews to ensure you&#39;re choosing the
                          best service provider for your needs.
                        </>
                      </Text>
                    </div>
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
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="leading-[48.00px] max-w-[520px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtRobotoBold40"
                >
                  What Our Customers Are Saying
                </Text>
              </div>
              <List
                className="flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_0c flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-md w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm w-full"
                          size="txtRobotoMedium14"
                        >
                          John Doe
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[9px] max-h-[9px]"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[208px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    Great experience! The service provider was on time and did
                    an excellent job.
                  </Text>
                </div>
                <div className="bg-black-900_0c flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-md w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-black-900_19 h-8 rounded-[50%] w-8"></div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm w-full"
                          size="txtRobotoMedium14"
                        >
                          Jane Smith
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[9px] max-h-[9px]"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[208px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    I highly recommend this app. It saved me so much time and
                    effort!
                  </Text>
                </div>
              </List>
            </div>
            <Line className="bg-black-900_19 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center md:px-10 sm:px-5 px-[170px] py-[60px] w-full">
          <div
            className="common-pointer flex flex-col gap-6 items-center justify-start max-w-[1100px] mx-auto w-full"
            onClick={() => navigate("/loginpage")}
          >
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
              size="txtRobotoBold40"
            >
              Sign Up Now
            </Text>
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoRegular16"
            >
              Join our community of satisfied users today.
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-center w-[600px] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoMedium14"
                >
                  Name
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Enter your name"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="text"
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
                  Email
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="Enter your email"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="email"
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
                  Password
                </Text>
                <Input
                  name="textfield_Three"
                  placeholder="Enter a password"
                  className="p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                  wrapClassName="border border-black-900_19 border-solid w-full"
                  type="password"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                  variant="outline"
                >
                  Log In
                </Button>
                <Button
                  className="cursor-pointer font-medium text-base text-center w-40"
                  shape="round"
                >
                  Sign Up
                </Button>
              </div>
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
              © 2023 Local Services Marketplace. All rights reserved.
            </Text>
            <Text
              className="text-black-900 ml-auto cursor-pointer"
              size="txtRobotoRegular20"
              onClick={() => navigate("/serviceproviderhomepage")}
            >
              → Login as Service Provider.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepagePage;
