import styled from "styled-components";
import RankCard from "./RankCard";

const Wrapper = styled.div`
  margin-top: 170px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(85, 38, 255, 0.4);
  margin-bottom: 24px;
`;

const SemiTitle = styled.h2`
  font-size: 35px;
  font-weight: 800;
  line-height: 35px;
  color: var(--primary-color);
  margin-bottom: 88px;
`;

const RankCardContainer = styled.div`
  margin: 0 98px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function MainRank() {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>스터디룸 랭킹</Title>
        <SemiTitle>현재 순위권 스터디룸을 확인하세요!</SemiTitle>
      </TitleContainer>
      <RankCardContainer>
        <RankCard />
        <RankCard />
        <RankCard />
      </RankCardContainer>
    </Wrapper>
  );
}
