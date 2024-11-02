import styled from "styled-components";

const Wrapper = styled.div<{ isFirst: boolean }>`
  width: 270px;
  height: 362px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.1);
  margin-top: ${(prop) => (prop.isFirst ? "0" : "54px")};
`;

const CardTitleContainer = styled.div<{ isFirst: boolean }>`
  width: 100%;
  height: 103px;
  padding: 20px 0;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  background-color: ${(prop) =>
    prop.isFirst ? `var(--primary-color)` : "#0D1116"};
  color: white;
`;

const RoomRank = styled.span`
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;

const RoomName = styled.span`
  font-family: SUIT;
  font-size: 20px;
  font-weight: 800;
  line-height: 20px;
  text-align: center;
`;

interface RankCardProps {
  isFirst: boolean;
  roomName: string;
  roomRank: number;
}

export default function RankCard({
  isFirst,
  roomName,
  roomRank,
}: RankCardProps) {
  return (
    <Wrapper isFirst={isFirst}>
      <CardTitleContainer isFirst={isFirst}>
        <RoomRank>{roomRank}위</RoomRank>
        <RoomName>{roomName}</RoomName>
      </CardTitleContainer>
    </Wrapper>
  );
}
