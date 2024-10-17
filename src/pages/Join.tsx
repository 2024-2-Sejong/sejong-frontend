import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";

const Wrapper = styled.div`
  background-color: var(--primary-bgColor);
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 56px;
  color: var(--black-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  input:nth-last-of-type(1) {
    margin-bottom: 26px;
  }
`;

export default function Join() {
  return (
    <Wrapper>
      <MainContainer>
        <Logo width="90" height="32" iconColor="#0D1116" />
        <Title>회원가입</Title>
        <Form>
          <Input placeholder="아이디" type="text" />
          <Input placeholder="비밀번호" type="password" />
          <Input placeholder="비밀번호 확인" type="password" />
          <FormButton text="회원가입" bgcolor="#5526FF" textcolor="#FFFFFF" />
        </Form>
      </MainContainer>
    </Wrapper>
  );
}
