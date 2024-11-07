import styled from "styled-components";
import roomLogoUrl from "../../public/roomLogo.png";
import CreateButton from "./CreateButton";
import CategoryIcon from "./CategoryIcon";

const Wrapper = styled.div`
  width: 100%;
  height: 220px;
  background-color: rgba(144, 144, 144, 0.2);
  border: 1px solid rgba(188, 188, 188, 1);
  border-radius: 20px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 14px 32px 14px 14px;
  display: flex;
  gap: 32px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StudyRoomImg = styled.img`
  width: 313px;
  height: 192px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

const StudyRoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const StudyRoomName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 18px;
  margin-bottom: 14px;
`;

const StudyRoomIntro = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
  color: rgba(13, 17, 22, 0.5);
  text-align: left;
`;

const StudyRoomCategories = styled.div`
  display: flex;
  gap: 10px;
`;

const StudyRoomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 22px;
  gap: 16px;
`;

const StudyRoomRightLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StudyRoomRightLightTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: rgba(13, 17, 22, 0.3);
`;

const StudyRoomRightheavyTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  display: flex;
  gap: 8px;
`;

export default function StudyRoomList() {
  return (
    <Wrapper>
      <StudyRoomImg src={roomLogoUrl} />
      <StudyRoomInfo>
        <div>
          <StudyRoomName>스터디룸이름</StudyRoomName>
          <StudyRoomIntro>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            perferendis nisi. Dolore odit, debitis quia, dolorem, natus id
            deleniti molestias quos totam vel ad blanditiis atque molestiae
            numquam? Ipsa, nam?
          </StudyRoomIntro>
        </div>
        <StudyRoomCategories>
          <CategoryIcon bgColor={"rgba(0, 0, 0, 0.7)"} text="카테고리" />
          <CategoryIcon bgColor={"rgba(0, 0, 0, 0.7)"} text="카테고리" />
          <CategoryIcon bgColor={"rgba(0, 0, 0, 0.7)"} text="카테고리" />
        </StudyRoomCategories>
      </StudyRoomInfo>
      <StudyRoomRightContainer>
        <div>
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
                  fill="#0D1116"
                />
              </svg>
              15명
            </StudyRoomRightheavyTitle>
          </StudyRoomRightLine>
        </div>
        <CreateButton
          text={"스터디 참가하기"}
          bgColor={"var(--primary-color)"}
          textColor={"var(--white-color)"}
          borderRadius={4}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </StudyRoomRightContainer>
    </Wrapper>
  );
}
