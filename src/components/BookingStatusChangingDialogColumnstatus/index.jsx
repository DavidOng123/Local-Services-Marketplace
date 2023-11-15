import React from "react";

import { Img, SelectBox, Text } from "components";

const listboxmainOptionsList = [
  { label: "Accept", value: "Accept" },
  { label: "Change Time", value: "Change Time" },
  { label: "Cancel", value: "Cancel" },
];

const BookingStatusChangingDialogColumnstatus = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start">
          <Text
            className="text-base text-blue_gray-900"
            size="txtMontserratMedium16"
          >
            {props?.statustext}
          </Text>
        </div>
        <SelectBox
          className="!text-gray-700 font-montserrat leading-[normal] mb-[145px] mt-0.5 text-base text-left w-full"
          placeholderClassName="!text-gray-700"
          indicator={
            <Img
              className="h-[10px] mr-[0] outline-black-900_a2 outline-[0.5px] outline w-[9px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="listboxmain"
          options={listboxmainOptionsList}
          isSearchable={false}
          placeholder="Select Status"
          shape="round"
          color="white_A700"
          size="xs"
        />
      </div>
    </>
  );
};

BookingStatusChangingDialogColumnstatus.defaultProps = { statustext: "Status" };

export default BookingStatusChangingDialogColumnstatus;
