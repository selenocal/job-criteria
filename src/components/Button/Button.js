import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ bgColor, borderColor, ...props }) => (
  <StyledButton bgColor={bgColor} borderColor={borderColor} {...props}>
    {props.children}
  </StyledButton>
);

const StyledButton = styled.button`
  height: 35px;
  padding: 0 15px;
  border-radius: 3px;
  color: #fff;
  background-color: ${props => (props.bgColor ? props.bgColor : "#000")};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid;
  border-color: ${props => (props.borderColor ? props.borderColor : "#000")};
`;

Button.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string
};

Button.defaultProps = {
  bgColor: "#000",
  borderColor: "#000"
};

export default Button;
