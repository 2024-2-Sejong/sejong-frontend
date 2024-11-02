import { useState } from "react";
import styled from "styled-components";
import FormButton from "./FormButton";

const Wrapper = styled.div`
  width: 494px;
  height: 500px;
  background-color: var(--white-color);
  border-radius: 8px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 60px;
`;

const SurveyTitle = styled.p`
  margin-bottom: 90px;
  font-size: 24px;
  font-weight: 600;
`;

const SurveyQuestion = styled.p`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 800;
`;

const SurveyButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 90px;
`;

const SurveyButton = styled.button<{ selected?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? "#5526FF" : "#d9d9d9")};
  color: white;
  font-size: 18px;
  cursor: pointer;
  border: none;
`;

const questions = ["그래프", "구현", "DP", "문자열", "자료구조", "그리디"];

export default function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<number[]>(
    Array(questions.length).fill(0) // 초기 난이도 값 0으로 초기화
  );

  const handleResponse = (value: number) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = value;
    setResponses(updatedResponses);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("설문 결과:", responses);
      // 설문 종료 후 결과를 저장하거나 제출할 수 있습니다.
    }
  };

  return (
    <Wrapper>
      <SurveyTitle>체감하는 문제 난이도</SurveyTitle>
      <SurveyQuestion>{questions[currentQuestionIndex]}</SurveyQuestion>
      <SurveyButtons>
        {[1, 2, 3, 4, 5].map((value) => (
          <SurveyButton
            key={value}
            selected={responses[currentQuestionIndex] === value}
            onClick={() => handleResponse(value)}
          >
            {value}
          </SurveyButton>
        ))}
      </SurveyButtons>
      <FormButton
        text={currentQuestionIndex < questions.length - 1 ? "다음" : "완료"}
        bgcolor="#5526FF"
        textcolor="#FFFFFF"
        onClick={handleNext}
      />
    </Wrapper>
  );
}
