import styled from "styled-components";
import Logo from "./components/Logo";

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0d1116;
  position: relative;
  overflow: hidden;
`;
// 중앙 박스 스타일
const CenterBox = styled.div`
  width: 800px;
  max-height: 560px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);

  z-index: 1;
  display: flex;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  flex-direction: column;
  align-items: center;
`;
// 배경 도형 스타일
const BackgroundShape = styled.div`
  position: absolute;
  width: 337px;
  height: 337px;
  border-radius: 50%;
  background: linear-gradient(#5526ff, #1a0d4b);
  z-index: 0;
`;
// 텍스트 스타일
const Heading = styled.h1`
  font-size: 36px;
  color: var(--white-color);
  font-weight: bold;
  margin-bottom: 86px;
  span {
    color: var(--primary-color);
  }
`;
const SubHeading = styled.h2`
  font-size: 20px;
  margin-top: 76px;
  color: var(--white-color);
  margin-bottom: 30px;
`;
const Button = styled.button`
  background-color: #5526ff;
  color: white;
  width: 158px;
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 81px;
  margin-bottom: 112px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3419b3;
  }
`;
const App = () => {
  return (
    <Container>
      {/* 배경 도형들 */}
      <BackgroundShape style={{ top: "-20px", right: "250px" }} />
      <BackgroundShape style={{ bottom: "-150px", right: "-150px" }} />

      {/* 중앙 박스 */}
      <CenterBox>
        <SubHeading>우리가 찾던 코딩 스터디 플랫폼</SubHeading>
        <Heading>
          <span>오코테</span>와 함께하는 스터디
        </Heading>

        {/* 로고 부분 */}
        <Logo />
        <Button>스터디 시작하기</Button>
      </CenterBox>
    </Container>
  );
};

export default App;
