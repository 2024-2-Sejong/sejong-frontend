import styled from "styled-components";
import RankCard from "./RankCard";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMainRank } from "../utils/api";

const Wrapper = styled.div`
  padding: 170px 0px;
  background-color: var(--primary-bgColor);
  z-index: 1;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 73px;
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
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
`;

const MotionRankCard = styled(motion.div)``;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--primary-color);
  height: 200px;
`;

interface getMainRankProps {
  studyRoomName: string;
  category: string[];
  memberCount: number;
}

export default function MainRank() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, error } = useQuery<getMainRankProps[]>({
    queryKey: ["mainRank"],
    queryFn: getMainRank,
  });

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); // 한번만 실행
      }
    }
  }, [setIsVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingSpinner>로딩 중...</LoadingSpinner>
      </Wrapper>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <Wrapper>
        <LoadingSpinner>
          데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.
        </LoadingSpinner>
      </Wrapper>
    );
  }

  if (!data || data.length < 3) {
    return (
      <Wrapper>
        <LoadingSpinner>현재 순위 데이터가 부족합니다.</LoadingSpinner>
      </Wrapper>
    );
  }

  // 데이터 가공: 순위와 isFirst 설정
  const rankCards = data.map((card, index) => {
    if (index === 0) {
      return { ...card, isFirst: false, roomRank: 2 }; // 첫 번째 카드 2위
    } else if (index === 1) {
      return { ...card, isFirst: true, roomRank: 1 }; // 두 번째 카드 1위
    } else {
      return { ...card, isFirst: false, roomRank: 3 }; // 세 번째 카드 3위
    }
  });

  return (
    <Wrapper>
      <TitleContainer>
        <Title>스터디룸 랭킹</Title>
        <SemiTitle>현재 순위권 스터디룸을 확인하세요!</SemiTitle>
      </TitleContainer>
      <RankCardContainer ref={ref}>
        {rankCards.map((card) => (
          <MotionRankCard
            key={card.studyRoomName}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: (3 - card.roomRank) * 0.5 }}
          >
            <RankCard
              isFirst={card.isFirst}
              roomName={card.studyRoomName}
              roomRank={card.roomRank}
              memberCount={card.memberCount}
              category={card.category}
            />
          </MotionRankCard>
        ))}
      </RankCardContainer>
    </Wrapper>
  );
}
