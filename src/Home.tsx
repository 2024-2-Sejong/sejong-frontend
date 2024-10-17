import styled from "styled-components";
import Logo from "./components/Logo";
import MainRank from "./components/MainRank";
import Header from "./components/Header";

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 930px;
  background-color: #0d1116;
  position: relative;
  overflow: hidden;
`;
// 중앙 박스 스타일
const CenterBox = styled.div`
  width: 800px;
  margin-top: 133px;
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

const BackgroundTriangle = styled.svg`
  position: absolute;
  z-index: 0;
  top: 520px;
  right: 200px;
`;

const BackgroundHalfCircle = styled.svg`
  position: absolute;
  z-index: 0;
  top: 400px;
  left: 200px;
`;
// 텍스트 스타일
const Heading = styled.h1`
  font-size: 36px;
  color: var(--white-color);
  font-weight: 800;
  margin-bottom: 86px;
  line-height: 45px;
  letter-spacing: 2px;
  span {
    font-weight: 800;
    color: var(--primary-color);
    line-height: 45px;
    letter-spacing: 2px;
  }
`;
const SubHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
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

const Line = styled.div`
  width: 1px;
  height: 130px;
  background-color: var(--white-color);
  z-index: 1;
  margin-top: 40px;
`;

const LineCircle = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid var(--white-color);
  position: relative;
`;

const LinearCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  z-index: 1;
  background-color: var(--primary-color);
  filter: blur(20px);
  transform: translate(-50%, -50%);
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        {/* 배경 도형들 */}
        <BackgroundShape style={{ top: "-20px", right: "250px" }} />
        <BackgroundTriangle
          width="266"
          height="347"
          viewBox="0 0 266 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.0992 346.405L0.786461 0.0915381L265.962 71.1451L50.0992 346.405Z"
            fill="url(#paint0_linear_118_195)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_195"
              x1="83.8237"
              y1="-88.6921"
              x2="194.801"
              y2="350.074"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5526FF" />
              <stop offset="1" stopColor="#1A0D4B" />
            </linearGradient>
          </defs>
        </BackgroundTriangle>
        <BackgroundHalfCircle
          width="272"
          height="271"
          viewBox="0 0 272 271"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M271.33 46.7058C241.602 16.9784 201.283 0.277742 159.242 0.277739C117.202 0.277738 76.8826 16.9784 47.1553 46.7057C17.4279 76.4331 0.727253 116.752 0.727248 158.793C0.72724 200.834 17.4279 241.153 47.1552 270.88L159.242 158.793L271.33 46.7058Z"
            fill="url(#paint0_linear_118_197)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_197"
              x1="108.67"
              y1="-14.8093"
              x2="209.815"
              y2="332.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5526FF" />
              <stop offset="1" stopColor="#1A0D4B" />
            </linearGradient>
          </defs>
        </BackgroundHalfCircle>

        {/* 중앙 박스 */}
        <CenterBox>
          <SubHeading>우리가 찾던 코딩 스터디 플랫폼</SubHeading>
          <Heading>
            <span>오코테</span>와 함께하는 스터디
          </Heading>

          {/* 로고 부분 */}
          <Logo width="158" height="62" />
          <Button>스터디 시작하기</Button>
        </CenterBox>
        <Line />
        <LineCircle>
          <LinearCircle />
        </LineCircle>
      </Container>
      <MainRank />
    </>
  );
}
