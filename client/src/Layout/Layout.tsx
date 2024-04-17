import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import background from "../assets/background.jpg";

export default function Layout() {
  return (
    <StyledContainer background={background}>
      <Outlet />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  text-align: center;
  min-height: 100dvh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
