import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 100vw;
  max-height: 56px;
  padding: 20px 34px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(10px);
`;

const Lists = styled.ul<{ $textcolor: string }>`
  color: ${(prop) => prop.$textcolor}; // Use $ prefix here
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 23px;
  margin-right: 6px;

  a:first-child {
    margin-right: 25px;
  }

  a:last-child {
    width: 64px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid ${(prop) => prop.$textcolor};
    border-radius: 4px;
  }
`;

export default function Header({
  color,
  iconColor,
}: {
  color: string;
  iconColor: string;
}) {
  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo width="45" height="16" iconColor={iconColor} />
      </Link>
      <Lists $textcolor={color}>
        {" "}
        {/* Use $ prefix here */}
        <Link to={"/study"}>스터디룸</Link>
        <Link to={"/user/login"}>로그인</Link>
        <Link to={"/user/join"}>회원가입</Link>
      </Lists>
    </Wrapper>
  );
}
