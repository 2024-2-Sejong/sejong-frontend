import styled from "styled-components";
import Header from "../components/Header";
import CategoryIcon from "../components/CategoryIcon";
import SubmitComponent from "../components/SubmitComponent";

const StudyRoomContainer = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
`;

const StudyRoomImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center;
`;

const StudyRoomInfo = styled.div`
  width: 100%;
  height: 500px;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 156px 170px 130px 170px;
  display: flex;
  justify-content: space-between;
`;

const InfoLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StudyRoomTitle = styled.h2`
  font-size: 50px;
  font-weight: 800;
  line-height: 50px;
  color: var(--white-color);
`;

const StudyRoomIntro = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(187, 187, 187, 1);
  max-width: 500px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

const CategoryIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const StudyRoomRightLine = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StudyRoomRightLightTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.3);
`;

const StudyRoomRightheavyTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  display: flex;
  gap: 8px;
  color: var(--white-color);
`;

const TodayProblemContatiner = styled.section`
  margin: 116px 0 140px 0;
  padding: 0px 138px 0px 146px;
  h2 {
    font-size: 30px;
    font-weight: 800;
    line-height: 30px;
  }
`;

const TodayProblemMessage = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: var(--primary-color);
`;

export default function StudyRoom() {
  return (
    <>
      <Header
        color="#FFFFFF"
        iconColor="#FFFFFF"
        bgColor={"rgba(13, 17, 22, 1)"}
      />
      <StudyRoomContainer>
        <StudyRoomImg src="/roomLogo.png" />
        <StudyRoomInfo>
          <InfoLeftSection>
            <div>
              <StudyRoomTitle>스터디룸 이름</StudyRoomTitle>
              <StudyRoomIntro>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sapiente illum doloremque nisi ad fugiat hic, repudiandae, saepe
                rem totam tenetur laudantium modi. Natus fuga ea commodi minus
                delectus totam.
              </StudyRoomIntro>
            </div>
            <CategoryIcons>
              <CategoryIcon text="카테고리 1" bgColor={"rgba(0, 0, 0, 0.7)"} />
              <CategoryIcon text="카테고리 1" bgColor={"rgba(0, 0, 0, 0.7)"} />
              <CategoryIcon text="카테고리 1" bgColor={"rgba(0, 0, 0, 0.7)"} />
            </CategoryIcons>
          </InfoLeftSection>
          <InfoRightSection>
            <StudyRoomRightLine>
              <StudyRoomRightLightTitle>스터디장</StudyRoomRightLightTitle>
              <StudyRoomRightheavyTitle>오코테</StudyRoomRightheavyTitle>
            </StudyRoomRightLine>
            <StudyRoomRightLine>
              <StudyRoomRightLightTitle>스터디원</StudyRoomRightLightTitle>
              <StudyRoomRightheavyTitle>
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.04297 5.30235C7.79787 4.78584 8.2961 3.89759 8.2961 2.88847C8.2961 1.29321 7.051 0 5.51508 0C3.97917 0 2.73407 1.29321 2.73407 2.88847C2.73407 3.8996 3.23429 4.78939 3.99173 5.30544C1.30389 6.24427 0.237646 9.62064 0.00438035 12.001C-0.0494826 12.5507 0.40069 12.9981 0.952974 12.9981H10.0362C10.6042 12.9981 11.0605 12.5258 10.9933 11.9618C10.7095 9.58111 9.70278 6.23172 7.04297 5.30235Z"
                    fill="white"
                  />
                </svg>
                15명
              </StudyRoomRightheavyTitle>
            </StudyRoomRightLine>
          </InfoRightSection>
        </StudyRoomInfo>
      </StudyRoomContainer>
      <TodayProblemContatiner>
        <h2>오늘의 문제</h2>
        <TodayProblemMessage>
          오늘의 문제를 아직 풀지 않았어요!
        </TodayProblemMessage>
        <SubmitComponent></SubmitComponent>
      </TodayProblemContatiner>
    </>
  );
}
