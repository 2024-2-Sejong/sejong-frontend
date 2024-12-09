import styled from "styled-components";
import QuiteStudyRoom from "../components/QuiteStudyRoom";
import { useQuery } from "@tanstack/react-query";
import { getUserInformation } from "../utils/api";
import { useState, useEffect } from "react";

// 스타일 컴포넌트 정의
const Wrapper = styled.div`
  width: 100vw;
  padding: 96px 138px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
  }

  h2 {
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    color: var(--primary-color);
  }
`;

const SubContainer = styled.div`
  display: grid;
  margin-top: 64px;
  grid-template-columns: 4fr 5fr;
  gap: 40px;
`;

const SubContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 20px;
`;

const WhiteBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 36px;
  background-color: var(--white-color);
  border-radius: 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .achievement {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      border: 2px solid var(--primary-color);
    }

    span {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  .no-achievement {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
    color: #888;
  }
`;

// UserInformationProps는 스터디룸 정보 배열로 수정
interface UserInformationProps {
  studyRoomId: string;
  studyRoomName: string;
}

export default function Account() {
  const token = localStorage.getItem("authMessage");
  const [hasSolvedProblem, setHasSolvedProblem] = useState(false);

  // useQuery에서 반환되는 데이터가 배열 형태로 처리되도록 수정
  const { data, isLoading } = useQuery<UserInformationProps[]>({
    queryKey: ["user", token],
    queryFn: () => getUserInformation(token!),
  });

  // localStorage에서 solved 데이터 확인
  useEffect(() => {
    const solved = JSON.parse(localStorage.getItem("solved") || "[]");
    setHasSolvedProblem(solved.length > 0);
  }, []);

  // 로딩 상태 체크
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Titles>
        <h2>My Page</h2>
        <h1>마이페이지</h1>
      </Titles>

      <SubContainer>
        <SubContainerSection>
          <SubTitle>스터디룸 관리</SubTitle>
          <WhiteBox>
            <ul>
              {data?.map((studyRoom) => (
                <QuiteStudyRoom
                  key={studyRoom.studyRoomId}
                  studyRoomName={studyRoom.studyRoomName}
                />
              ))}
            </ul>
          </WhiteBox>
        </SubContainerSection>
        <SubContainerSection>
          <SubTitle>나의 업적</SubTitle>
          <WhiteBox>
            {hasSolvedProblem ? (
              <div className="achievement">
                <img
                  src="https://solved.ac/_next/image?url=https%3A%2F%2Fstatic.solved.ac%2Fprofile_badge%2F120x120%2Fgrass_01.png%3F&w=256&q=75"
                  alt="첫 문제 해결 배지"
                />
                <span>첫 문제 해결사</span>
              </div>
            ) : (
              <div className="no-achievement">아직 달성한 업적이 없습니다.</div>
            )}
          </WhiteBox>
        </SubContainerSection>
      </SubContainer>
    </Wrapper>
  );
}
