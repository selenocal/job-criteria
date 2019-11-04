import React from "react";
import styled from "styled-components";

import JobCriteria from "../../containers/JobCriteria";
import Card from "../Card/Card";

const App = () => {
  return (
    <Wrapper className="App">
      <Card width="600px">
        <JobCriteria />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
