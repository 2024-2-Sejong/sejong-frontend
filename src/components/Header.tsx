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
  background-color: rgba(13, 17, 22, 0.2);
  backdrop-filter: blur(10px);
`;

const Lists = styled.ul`
  color: var(--white-color);
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
    border: 0.5px solid #ffffff;
    border-radius: 4px;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to={""}>
        <Logo width="45" height="16" />
      </Link>
      <Lists>
        <Link to={""}>스터디룸</Link>
        <Link to={""}>로그인</Link>
        <Link to={""}>회원가입</Link>
      </Lists>
    </Wrapper>
  );
}
