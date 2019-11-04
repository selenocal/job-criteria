import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import  Icon from "../../assets/icons/warning.svg";

const Input = ({ error, inline, ...props }) => (
  <Wrapper>
    <StyledInput error={error} inline={inline} {...props} />
    {error && (
      <Text>
        <Icon />
        The field is required.
      </Text>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledInput = styled.input`
  width: 80px;
  height: 35px;
  border-radius: 3px;
  padding-left: 10px;
  margin-left: ${props => (props.inline ? "5px" : "0")};
  border: ${props => (props.error ? "1px solid red" : "1px solid #e5e5e5")};
`;

const Text = styled.div`
  color: #6d2026;
  margin-top: 5px;
`;

Input.propTypes = {
  error: PropTypes.bool,
  inline: PropTypes.bool
};

Input.defaultProps = {
  error: false,
  inline: false
};

export default Input;
