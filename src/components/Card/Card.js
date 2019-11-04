import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({ children, width }) => (
  <StyledCard width={width}>{children}</StyledCard>
);

const StyledCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin: 50px;
  width: ${props => (props.width ? props.width : "100%")};
`;

Card.propTypes = {
  width: PropTypes.string
};

Card.defaultProps = {
  width: "100%"
};

export default Card;
