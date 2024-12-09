import styled from "styled-components";
import CreateButton from "./CreateButton";
import CategoryIcon from "./CategoryIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  border-radius: 20px;
  height: 316px;
  border: 1px solid rgba(188, 188, 188, 1);
  background-color: rgba(85, 38, 255, 0.1);
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

  const handleClick = async () => {
    // 한글 카테고리를 영어로 변환하는 매핑 테이블
    const categoryMapping: { [key: string]: string } = {
      "다이나믹 프로그래밍": "DP",
      구현: "Implementation",
      "자료 구조": "DataStructure",
      "그래프 이론": "Graph",
      문자열: "String",
      "그리디 알고리즘": "Greedy",
    };

    // category_list를 영어로 변환
    const categoriesToSubmit = category_list
      .filter((category) => categoryMapping[category]) // 매핑 가능한 카테고리만 필터링
      .map((category) => ({
        category: categoryMapping[category],
        value: 1,
      }));

    try {
      // 각각의 카테고리에 대해 Axios 요청
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
      window.location.href = `${url}`;
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  return (
    <Wrapper>
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
          text="코드 제출하기"
          bgColor="var(--primary-color)"
          textColor="white"
          borderRadius={1}
          handleClick={handleClick}
        />
      </EndSection>
    </Wrapper>
  );
}
