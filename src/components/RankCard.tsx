import styled from "styled-components";
import roomLogoUrl from "../../public/roomLogo.png";

const Wrapper = styled.div<{ $isFirst: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 362px;
  border-radius: 20px;
  padding: 0px 10px;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.1);
  margin-top: ${(prop) => (prop.$isFirst ? "0" : "54px")};
`;

const CardTitleContainer = styled.div<{ $isFirst: boolean }>`
  width: 265px;
  height: 103px;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 20px 0;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  background: ${(prop) =>
    prop.$isFirst
      ? `linear-gradient(90deg, #9578FF 0%, #5526FF 50%, #2F119C 100%);
`
      : "#0D1116"};
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

const RoomLogoImg = styled.img`
  width: 250px;
  height: 120px;
  margin-bottom: 10px;
`;

const RoomPeopleInfo = styled.div`
  display: flex;
  align-items: center;
  align-self: self-end;
  gap: 8px;
  margin-bottom: 10px;
  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
  }
`;

const Categories = styled.div`
  display: flex;
  align-self: self-start;
  gap: 10px;
`;

const CategoryCircle = styled.div<{ $isFirst: boolean }>`
  width: 88px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${(props) =>
    props.$isFirst ? "rgba(85, 38, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  color: var(--white-color);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
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
    <Wrapper $isFirst={isFirst}>
      <CardTitleContainer $isFirst={isFirst}>
        <RoomRank>{roomRank}위</RoomRank>
        <RoomName>{roomName}</RoomName>
      </CardTitleContainer>
      <RoomLogoImg src={roomLogoUrl} />
      <RoomPeopleInfo>
        <svg
          width="11"
          height="13"
          viewBox="0 0 11 13"
          fill={`${isFirst ? "#5526FF" : "rgba(0, 0, 0, 1)"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.04297 5.30235C7.79787 4.78584 8.2961 3.89759 8.2961 2.88847C8.2961 1.29321 7.051 0 5.51508 0C3.97917 0 2.73407 1.29321 2.73407 2.88847C2.73407 3.8996 3.23429 4.78939 3.99173 5.30544C1.30389 6.24427 0.237646 9.62064 0.00438035 12.001C-0.0494826 12.5507 0.40069 12.9981 0.952974 12.9981H10.0362C10.6042 12.9981 11.0605 12.5258 10.9933 11.9618C10.7095 9.58111 9.70278 6.23172 7.04297 5.30235Z"
            fill={`${isFirst ? "#5526FF" : "rgba(0, 0, 0, 1)"}`}
          />
        </svg>
        <span>15명</span>
      </RoomPeopleInfo>
      <Categories>
        <CategoryCircle $isFirst={isFirst}>카테고리 1</CategoryCircle>
        <CategoryCircle $isFirst={isFirst}>카테고리 2</CategoryCircle>
      </Categories>
    </Wrapper>
  );
}
