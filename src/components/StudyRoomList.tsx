import styled from "styled-components";
import CreateButton from "./CreateButton";
import CategoryIcon from "./CategoryIcon";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

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

interface studyRoomListProps {
  key: string;
  studyRoomId: string;
  studyRoomName: string;
  ownerName: string;
  memberCount: number;
  studyRoomDescription: string;
  category: string[];
  member: boolean;
}

export default function StudyRoomList({
  studyRoomName,
  studyRoomDescription,
  category,
  ownerName,
  memberCount,
  studyRoomId,
  member,
}: studyRoomListProps) {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleClick = async () => {
    const token = localStorage.getItem("authMessage"); // 인증 토큰을 로컬 스토리지에서 가져옴
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.post(
        `/api/user/studyroom/${studyRoomId}/join`,
        {},
        {
          headers: { Authorization: `${token}` },
        }
      );

      if (response.status === 200) {
        alert("스터디룸에 성공적으로 참가하였습니다!");
        queryClient.invalidateQueries({
          queryKey: ["studyroom", studyRoomId],
        });
        navigate(`/study/room/${studyRoomId}`);
      } else {
        alert("스터디룸 참가에 실패했습니다.");
      }
    } catch (error) {
      console.error("스터디룸 참가 중 오류 발생:", error);
      alert("스터디룸 참가 중 문제가 발생했습니다.");
    }
  };

  return (
    <Wrapper>
      <StudyRoomImg src="/roomLogo.png" />
      <StudyRoomInfo>
        <div>
          <StudyRoomName>{studyRoomName}</StudyRoomName>
          <StudyRoomIntro>{studyRoomDescription}</StudyRoomIntro>
        </div>
        <StudyRoomCategories>
          {category.map((c, index) => (
            <CategoryIcon key={index} bgColor={"rgba(0, 0, 0, 0.7)"} text={c} />
          ))}
        </StudyRoomCategories>
      </StudyRoomInfo>
      <StudyRoomRightContainer>
        <div>
          <StudyRoomRightLine>
            <StudyRoomRightLightTitle>스터디장</StudyRoomRightLightTitle>
            <StudyRoomRightheavyTitle>{ownerName}</StudyRoomRightheavyTitle>
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
              {memberCount}
            </StudyRoomRightheavyTitle>
          </StudyRoomRightLine>
        </div>
        {member ? (
          // 이미 참가한 경우 "스터디 입장하기" 버튼을 보여줌
          <Link to={`/study/room/${studyRoomId}`}>
            <CreateButton
              text={"스터디 입장하기"}
              bgColor={"var(--primary-color)"}
              textColor={"var(--white-color)"}
              borderRadius={4}
              handleClick={() => null}
            />
          </Link>
        ) : (
          // 아직 참가하지 않은 경우 "스터디 참가하기" 버튼을 보여줌
          <CreateButton
            text={"스터디 참가하기"}
            bgColor={"var(--primary-color)"}
            textColor={"var(--white-color)"}
            borderRadius={4}
            handleClick={handleClick}
          />
        )}
      </StudyRoomRightContainer>
    </Wrapper>
  );
}
