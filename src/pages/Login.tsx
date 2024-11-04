import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

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
`;

const FindLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #a9a9a9;
  font-size: 12px;
  font-weight: 600;
  gap: 8px;
`;

const FindLink = styled(Link)``;

const SignUpLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-color);
  margin-top: 16px;
`;

interface LoginProps {
  id: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const handleFormSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <MainContainer>
        <Logo width="90" height="32" iconColor="#0D1116" />
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            placeholder="아이디"
            type="text"
            {...register("id", {
              required: "아이디를 입력하세요",
            })}
          />
          {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}{" "}
          {/* 에러 메시지 표시 */}
          <Input
            placeholder="비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력하세요",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}{" "}
          {/* 에러 메시지 표시 */}
          <FindLinksContainer>
            <FindLink to={"/users/find/id"}>아이디 찾기</FindLink>
            <span>|</span>
            <FindLink to={"/users/find/password"}>비밀번호 찾기</FindLink>
          </FindLinksContainer>
          <FormButton text="로그인" bgcolor="#5526FF" textcolor="#FFFFFF" />
        </Form>
        <SignUpLink to={"/user/join"}>회원가입</SignUpLink>
      </MainContainer>
    </Wrapper>
  );
}
