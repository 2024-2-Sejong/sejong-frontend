import { useState } from "react";
import styled from "styled-components";
import FormButton from "./FormButton";
import { motion, AnimatePresence } from "framer-motion";
import ErrorMessage from "./ErrorMessage";
import axios from "axios"; // axios import

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  background-color: var(--white-color);
  border-radius: 8px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 60px 55px 60px;
  position: relative;
`;

const SurveyPrevButton = styled.button`
  display: flex;
  gap: 8px;
  position: absolute;
  color: rgba(13, 17, 22, 0.4);
  left: 23px;
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }
`;

const SurveyIndex = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: var(--primary-color);
  margin-bottom: 24px;
`;

const SurveyTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: rgba(13, 17, 22, 0.6);
  margin-bottom: 80px;
`;

const SurveyQuestion = styled(motion.p)`
  font-size: 28px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 80px;
`;

const SurveyButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 64px;
  span {
    color: rgba(85, 38, 255, 1);
  }
`;

const SurveyButton = styled.button<{ selected?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ selected }) =>
    selected ? "#5526FF" : "rgba(241, 240, 243, 1)"};
  color: white;
  font-size: 18px;
  cursor: pointer;
  border: none;
`;

const questions = ["그래프", "구현", "DP", "문자열", "자료구조", "그리디"];

export default function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<number[]>(
    Array(questions.length).fill(0)
  );
  const [error, setError] = useState("");

  const handleResponse = (value: number) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = value;
    setResponses(updatedResponses);
    setError(""); // 응답을 선택하면 에러 메시지 초기화
  };

  const handleNext = async () => {
    if (responses[currentQuestionIndex] === 0) {
      setError("난이도를 선택해주세요."); // 선택하지 않았을 때 에러 메시지 설정
      return; // 다음으로 넘어가지 않도록 조기 리턴
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("설문 결과:", responses);

      // 설문 결과를 API로 전송
      try {
        const token = localStorage.getItem("authMessage");
        if (!token) {
          throw new Error("토큰이 없습니다.");
        }

        // 설문 데이터를 API 형식으로 변환
        const initialData = questions.map((category, index) => ({
          categoryId: category, // 각 카테고리에 고유 ID 부여 (1부터 시작)
          difficulty: responses[index],
        }));

        const response = await axios.post(
          `/api/user/difficulty`,
          { initialData },
          {
            headers: { Authorization: `${token}` },
          }
        );

        if (response.status === 200) {
          alert("설문이 성공적으로 제출되었습니다.");
        } else {
          alert("설문 제출에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error(error);
        alert("설문 제출 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <Wrapper>
      {currentQuestionIndex >= 1 && (
        <SurveyPrevButton onClick={handlePrev}>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L2.02976 6.4213C1.00027 7.22201 1.00027 8.77799 2.02976 9.5787L9 15"
              stroke="#0D1116"
              strokeOpacity="0.4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>이전</span>
        </SurveyPrevButton>
      )}
      <SurveyIndex>{currentQuestionIndex + 1}/6</SurveyIndex>
      <SurveyTitle>아래 문제의 체감 난이도를 선택해주세요</SurveyTitle>
      <AnimatePresence mode="wait">
        <SurveyQuestion
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {questions[currentQuestionIndex]}
        </SurveyQuestion>
      </AnimatePresence>
      <SurveyButtons>
        <span>어렵다</span>
        {[1, 2, 3, 4, 5].map((value) => (
          <SurveyButton
            key={value}
            selected={responses[currentQuestionIndex] === value}
            onClick={() => handleResponse(value)}
          />
        ))}
        <span>어렵지않다</span>
      </SurveyButtons>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* 에러 메시지 표시 */}
      <FormButton
        text={currentQuestionIndex < questions.length - 1 ? "다음" : "완료"}
        bgcolor="#5526FF"
        textcolor="#FFFFFF"
        onClick={handleNext}
        check={false}
      />
    </Wrapper>
  );
}
