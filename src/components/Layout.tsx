import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-bgColor);
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
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
