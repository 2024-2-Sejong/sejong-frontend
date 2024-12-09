import styled from "styled-components";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import StudyRoomList from "../components/StudyRoomList";
import BgWrapper from "../components/BgWrapper";
import { useRef } from "react";
import StudyRoomCreateModal, {
  StudyRoomCreateModalHandle,
} from "../components/StudyRoomCreateModal"; // Modal 컴포넌트에서 export된 타입을 import
import { useQuery } from "@tanstack/react-query";
import { getAllStudyRooms } from "../utils/api";

const Wrapper = styled.div`
  padding: 112px 142px;
  display: flex;
  flex-direction: column;
  background-clip: var(--primary-bgColor);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const EngTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  line-height: 24px;
  color: var(--primary-color);
`;

const KorTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: self-end;
`;

const StudyRoomLists = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface studyRoomProps {
  studyRoomId: string;
  studyRoomName: string;
  ownerName: string;
  memberCount: number;
  studyRoomScore: number;
  studyRoomDescription: string;
  category: string[];
  member: boolean;
  index: number;
}

export default function Study() {
  const dialogRef = useRef<StudyRoomCreateModalHandle>(null); // useRef 타입 지정
  const token = localStorage.getItem("authMessage"); // 토큰을 로컬스토리지에서 가져옴

  // useQuery로 스터디룸 데이터를 가져옵니다.
  const { data, isLoading, error } = useQuery({
    queryKey: ["studyrooms"], // 쿼리 키
    queryFn: () => getAllStudyRooms({ token }), // getAllStudyRooms에 토큰 전달
  });

  const handleRoomCreateClick = () => {
    if (dialogRef.current) {
      dialogRef.current.openModal(); // 모달 열기
    }
  };

  if (isLoading) return <div>Loading...</div>; // 로딩 상태 처리
  if (error) return <div>Error loading study rooms</div>; // 에러 상태 처리

  return (
    <BgWrapper>
      <Header
        color="#FFFFFF"
        iconColor="#FFFFFF"
        bgColor={"rgba(37, 41, 47, 1)"}
      />
      <Wrapper>
        <TitleContainer>
          <EngTitle>STUDY ROOM</EngTitle>
          <KorTitle>스터디룸</KorTitle>
        </TitleContainer>
        <ButtonContainer>
          <CreateButton
            text={"+ 스터디 생성하기"}
            bgColor={"var(--primary-color)"}
            textColor={"var(--white-color)"}
            borderRadius={100}
            handleClick={handleRoomCreateClick}
          />
        </ButtonContainer>
        <StudyRoomLists>
          {data?.map((room: studyRoomProps, index: number) => (
            // room 객체를 StudyRoomList 컴포넌트에 전달
            <StudyRoomList
              key={room.studyRoomId}
              studyRoomId={room.studyRoomId}
              studyRoomName={room.studyRoomName}
              ownerName={room.ownerName}
              memberCount={room.memberCount}
              studyRoomDescription={room.studyRoomDescription}
              category={room.category}
              member={room.member}
              index={index}
            />
          ))}
        </StudyRoomLists>
      </Wrapper>
      <StudyRoomCreateModal ref={dialogRef} />
    </BgWrapper>
  );
}
