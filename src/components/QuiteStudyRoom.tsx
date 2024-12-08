import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 22px;
  min-width: 363px;
  width: 100%;

  border-radius: 8px;
  background-color: rgba(85, 38, 255, 0.05);
`;

const StudyRoomName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
`;

const QuiteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1px;
  color: var(--primary-color);
  background-color: transparent;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
`;

export default function QuiteStudyRoom({
  studyRoomName,
}: {
  studyRoomName: string;
}) {
  return (
    <Wrapper>
      <StudyRoomName>{studyRoomName}</StudyRoomName>
      <QuiteButton>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5" fill="#5526FF" />
          <line x1="3" y1="6" x2="9" y2="6" stroke="white" />
        </svg>
        탈퇴
      </QuiteButton>
    </Wrapper>
  );
}
