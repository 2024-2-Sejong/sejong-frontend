import styled from "styled-components";
import RankCard from "./RankCard";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

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
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MotionRankCard = styled(motion.div)``;

const rankCards = [
  { isFirst: false, roomName: "스터디룸 이름", roomRank: 2 }, // 2위
  { isFirst: true, roomName: "스터디룸 이름", roomRank: 1 }, // 1위
  { isFirst: false, roomName: "스터디룸 이름", roomRank: 3 }, // 3위
];

export default function MainRank() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <Wrapper>
      <TitleContainer>
        <Title>스터디룸 랭킹</Title>
        <SemiTitle>현재 순위권 스터디룸을 확인하세요!</SemiTitle>
      </TitleContainer>
      <RankCardContainer ref={ref}>
        {rankCards.map((card) => (
          <MotionRankCard
            key={card.roomRank}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: (2 - card.roomRank) * 0.5 }}
          >
            <RankCard {...card} />
          </MotionRankCard>
        ))}
      </RankCardContainer>
    </Wrapper>
  );
}
