import styled from "styled-components";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.header<{ $bgColor: string }>`
  width: 100vw;
  max-height: 56px;
  padding: 20px 34px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(10px);
  background-color: ${(prop) => prop.$bgColor};
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

interface HeaderProps {
  color: string;
  iconColor: string;
  bgColor?: string;
}

export default function Header({
  color,
  iconColor,
  bgColor = "transparent",
}: HeaderProps) {
  const isLoggedIn = localStorage.getItem("authMessage");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("authMessage");
    localStorage.removeItem("username");
    alert("로그아웃이 완료되었습니다!");
    navigate("/");
  };

  return (
    <Wrapper $bgColor={bgColor}>
      <Link to={"/"}>
        <Logo width="45" height="16" iconColor={iconColor} />
      </Link>
      <Lists $textcolor={color}>
        {isLoggedIn ? (
          // 로그인 상태일 때
          <>
            <p>{username}님 안녕하세요!</p>
            <Link to={"/study"}>스터디룸</Link>
            <Link to={"/user/account"}>마이페이지</Link>
            <button onClick={handleClick} style={{ color: "white" }}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/study"}>스터디룸</Link>
            <Link to={"/user/login"}>로그인</Link>
            <Link to={"/user/join"}>회원가입</Link>
          </>
        )}
      </Lists>
    </Wrapper>
  );
}
