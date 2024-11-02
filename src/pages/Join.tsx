import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Survey from "../components/Survey";
import { motion, AnimatePresence } from "framer-motion";

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

const ErrorMessage = styled.span`
  color: #ff4d4f; /* 에러 메시지 색상 */
  font-size: 12px;
  margin-top: -8px; /* 입력 필드와의 간격 조절 */
  align-self: flex-start; /* 왼쪽 정렬 */
`;

const TempDiv = styled.div`
  width: 100%;
  height: 40px;
`;

interface JoinFormProps {
  id: string;
  password: string;
  confirmPassword: string;
}

export default function Join() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinFormProps>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data: JoinFormProps) => {
    console.log(data);
    setIsSubmitted(true);
  };

  // password 값 가져오기
  const password = watch("password");

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <MainContainer>
              <Logo width="90" height="32" iconColor="#0D1116" />
              <Title>회원가입</Title>
              <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input
                  placeholder="아이디"
                  type="text"
                  {...register("id", { required: "아이디를 입력하세요." })}
                />
                {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}

                <Input
                  placeholder="비밀번호"
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력하세요.",
                  })}
                />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}

                <Input
                  placeholder="비밀번호 확인"
                  type="password"
                  {...register("confirmPassword", {
                    required: "비밀번호 확인을 입력하세요.",
                    validate: (value) =>
                      value === password || "비밀번호가 일치하지 않습니다.",
                  })}
                />
                {errors.confirmPassword && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}
                <TempDiv />
                <FormButton
                  text="회원가입"
                  bgcolor="#5526FF"
                  textcolor="#FFFFFF"
                />
              </Form>
            </MainContainer>
          </motion.div>
        ) : (
          <motion.div
            key="survey"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }} // 사라지는 효과
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
