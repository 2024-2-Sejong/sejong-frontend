import styled from "styled-components";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import StudyRoomList from "../components/StudyRoomList";

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

export default function Study() {
  return (
    <>
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
            handleClick={() => console.log("create")}
          />
        </ButtonContainer>
        <StudyRoomLists>
          <StudyRoomList />
          <StudyRoomList />
          <StudyRoomList />
        </StudyRoomLists>
      </Wrapper>
    </>
  );
}
