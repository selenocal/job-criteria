import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tag = ({ children }) => <StyledTag>{children}</StyledTag>;

const StyledTag = styled.span`
  display: inline-block;
  background-color: #ddd;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 3px 3px 3px 0;
`;

Tag.propTypes = {
  children: PropTypes.string.isRequired
};

export default Tag;
