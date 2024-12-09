import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreateButton from "./CreateButton";
import CategoryIcon from "./CategoryIcon";
import axios from "axios";

interface WrapperProps {
  isSolved: boolean; // isSolved prop 타입 정의
}

const Wrapper = styled.div<WrapperProps>`
  border-radius: 20px;
  height: 316px;
  border: 1px solid rgba(188, 188, 188, 1);
  background-color: ${(props) =>
    props.isSolved ? "#DFF7E1" : "rgba(85, 38, 255, 0.1)"};
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr;
  align-items: end;
  padding: 44px 45px;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProblemTitle = styled.p`
  font-size: 45px;
  font-weight: 800;
  line-height: 45px;
  margin-top: 100px;
  margin-bottom: 51px;
`;

const CategoryIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const EndSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

interface submitComponentProps {
  category_list: string[];
  name: string;
  problem_id: number;
  url: string;
  studyRoomId: string;
}

export default function SubmitComponent({
  category_list,
  name,
  problem_id,
  url,
  studyRoomId,
}: submitComponentProps) {
  const token = localStorage.getItem("authMessage");
  const username = localStorage.getItem("username");

  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const solved = JSON.parse(localStorage.getItem("solved") || "[]");
      setIsSolved(solved.includes(`${username}-${problem_id}`));
    }, 2000);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [username, problem_id]);

  const handleClick = async () => {
    if (isSolved) return;

    const categoryMapping: { [key: string]: string } = {
      "다이나믹 프로그래밍": "DP",
      구현: "Implementation",
      "자료 구조": "DataStructure",
      "그래프 이론": "Graph",
      문자열: "String",
      "그리디 알고리즘": "Greedy",
    };

    const categoriesToSubmit = category_list
      .filter((category) => categoryMapping[category])
      .map((category) => ({
        category: categoryMapping[category],
        value: 1,
      }));

    try {
      await Promise.all(
        categoriesToSubmit.map(({ category, value }) =>
          axios.post(
            `/api/user/studyroom/${studyRoomId}/statistics`,
            { category, value },
            {
              headers: { Authorization: `${token}` },
            }
          )
        )
      );

      console.log("데이터 전송 성공");

      const solved = JSON.parse(localStorage.getItem("solved") || "[]");
      const updatedSolved = [...solved, `${username}-${problem_id}`];
      localStorage.setItem("solved", JSON.stringify(updatedSolved));

      window.location.href = `${url}`;
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  return (
    <Wrapper isSolved={isSolved}>
      <img src="/character.png" alt="ocoteCharacter" />
      <MiddleSection>
        <ProblemTitle>{name}</ProblemTitle>
        <CategoryIcons>
          {category_list &&
            category_list.length > 0 &&
            category_list.map((c, index) => (
              <CategoryIcon key={index} text={c} bgColor="rgba(0, 0, 0, 0.7)" />
            ))}
        </CategoryIcons>
      </MiddleSection>
      <EndSection>
        <CreateButton
          text={isSolved ? "코드 제출 완료" : "코드 제출하기"}
          bgColor={isSolved ? "gray" : "var(--primary-color)"}
          textColor="white"
          borderRadius={1}
          handleClick={handleClick}
        />
      </EndSection>
    </Wrapper>
  );
}
