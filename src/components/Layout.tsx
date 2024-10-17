import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export default function Layout({
  color,
  iconColor,
}: {
  color: string;
  iconColor: string;
}) {
  return (
    <Container>
      <Header color={color} iconColor={iconColor} />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
