import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs1 text-black-900",
    black_900_0c: "bg-black-900_0c text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
    black_900: "border border-black-900 border-solid text-black-900",
  },
};
const sizes = { xs: "p-1", sm: "p-[9px]", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "black_900_0c", "black_900"]),
};

export { Button };
