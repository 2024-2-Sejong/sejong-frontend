import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import FormButton from "../components/FormButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios 임포트

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

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  const password = watch("password");

  const handleFormSubmit = async (data: JoinFormProps) => {
    const { id, password } = data;
    setErrorMessage(null); // 에러 메시지 초기화
    setLoading(true); // 로딩 시작

    try {
      const response = await axios.post("/api/user/create", {
        username: id,
        password,
      });

      if (response.status === 201) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
      } else {
        setErrorMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
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
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{" "}
              {/* 에러 메시지 표시 */}
              <TempDiv />
              <FormButton
                text={loading ? "처리 중..." : "회원가입"}
                bgcolor="#5526FF"
                textcolor="#FFFFFF"
                check={false}
              />
            </Form>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}
