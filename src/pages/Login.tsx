import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import Survey from "../components/Survey";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [isInitialLogin, setIsInitialLogin] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (data: LoginProps) => {
    const { id, password } = data;

    try {
      const response = await axios.post("/api/user/login", {
        username: id,
        password,
      });

      // 서버 응답 처리
      const { message, initialLogin } = response.data;
      localStorage.setItem("authMessage", message);

      // 초기 로그인 상태 업데이트
      if (initialLogin) {
        await localStorage.setItem("username", data.id);
        setIsInitialLogin(true); // Survey 상태로 전환
      } else {
        console.log("기존 사용자 로그인입니다.");
        alert("로그인 성공!");
        await localStorage.setItem("username", data.id);
        navigate("/");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {!isInitialLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
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
                {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
                <Input
                  placeholder="비밀번호"
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력하세요",
                  })}
                />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <FormButton
                  text="로그인"
                  bgcolor="#5526FF"
                  textcolor="#FFFFFF"
                  check={false}
                />
              </Form>
            </MainContainer>
          </motion.div>
        ) : (
          <motion.div
            key="survey"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MainContainer>
              <Survey />
            </MainContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
