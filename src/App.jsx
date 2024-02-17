import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";

const StyledApp = styled.div``;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Hello World!</h1>
      </StyledApp>
    </>
  );
}

export default App;
