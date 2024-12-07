import styled from "styled-components";
import Header from "../components/Header";
import CategoryIcon from "../components/CategoryIcon";
import SubmitComponent from "../components/SubmitComponent";
import Chart from "../components/Chart";
import BgWrapper from "../components/BgWrapper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { studyRoomDetail, studyRoomProblem } from "../utils/api";

const StudyRoomWrapper = styled.div`
  padding: 0px 0px 132px 0px;
`;

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

const StudyRoomStatistics = styled.section`
  display: grid;
  grid-template-columns: 4fr 5.5fr;
  margin-top: 140px;
  padding: 0px 138px 0px 146px;
  gap: 46px;
`;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StatisticsTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 20px;
`;

const Ranking = styled.ol`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid var(--white-color);
  width: 100%;
  height: auto;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
  li {
    background-color: rgba(248, 247, 249, 1);
    border-bottom: 1px solid var(--white-color);
    padding: 35px 45px;
    display: flex;
    gap: 82px;
  }
  li:first-child {
    background: linear-gradient(90deg, #9578ff 0%, #5526ff 50%, #2f119c 100%);
    background-size: 200% 200%; /* 배경 크기를 키워서 애니메이션 효과를 줍니다 */
    animation: gradientShift 2.5s ease infinite;

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    border-bottom: none;
    border-radius: 20px 20px 0 0;
    span {
      color: var(--white-color);
      font-size: 20px;
      font-weight: 800;
    }
  }

  li:last-child {
    border-bottom: none;
    border-radius: 0 0 20px 20px;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: var(--primary-color);
  }
  span:last-child {
    color: black;
  }
`;

interface userRankingProps {
  rank: number;
  username: string;
}

interface statisticsProps {
  [key: string]: number;
}

interface studyRoomDetailProps {
  studyRoomName: string;
  studyOwner: string;
  memberCount: number;
  studyRoomDescription: string;
  category: string[];
  ranking: userRankingProps[];
  statistics: statisticsProps;
}

export default function StudyRoom() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<studyRoomDetailProps>({
    queryKey: ["studyroom", id],
    queryFn: () => studyRoomDetail(id!),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <BgWrapper>
      <Header
        color="#FFFFFF"
        iconColor="#FFFFFF"
        bgColor={"rgba(13, 17, 22, 1)"}
      />
      <StudyRoomWrapper>
        <StudyRoomContainer>
          <StudyRoomImg src="/roomLogo.png" />
          <StudyRoomInfo>
            <InfoLeftSection>
              <div>
                <StudyRoomTitle>{data?.studyRoomName}</StudyRoomTitle>
                <StudyRoomIntro>{data?.studyRoomDescription}</StudyRoomIntro>
              </div>
              <CategoryIcons>
                {data?.category.map((category, index) => (
                  <CategoryIcon
                    key={index}
                    text={category}
                    bgColor={"rgba(0, 0, 0, 0.7)"}
                  />
                ))}
              </CategoryIcons>
            </InfoLeftSection>
            <InfoRightSection>
              <StudyRoomRightLine>
                <StudyRoomRightLightTitle>스터디장</StudyRoomRightLightTitle>
                <StudyRoomRightheavyTitle>
                  {data?.studyOwner}
                </StudyRoomRightheavyTitle>
              </StudyRoomRightLine>
              <StudyRoomRightLine>
                <StudyRoomRightLightTitle>스터디원</StudyRoomRightLightTitle>
                <StudyRoomRightheavyTitle>
                  {data?.memberCount}명
                </StudyRoomRightheavyTitle>
              </StudyRoomRightLine>
            </InfoRightSection>
          </StudyRoomInfo>
        </StudyRoomContainer>

        {/* 코드 제출 섹션 시작*/}
        <TodayProblemContatiner>
          <h2>오늘의 문제</h2>
          <TodayProblemMessage>
            오늘의 문제를 아직 풀지 않았어요!
          </TodayProblemMessage>
          <SubmitComponent />
        </TodayProblemContatiner>

        {/* 스터디룸 통계 섹션 시작 */}
        <StudyRoomStatistics>
          <RankingContainer>
            <StatisticsTitle>스터디원 랭킹</StatisticsTitle>
            <Ranking>
              {data?.ranking
                .sort((a, b) => a.rank - b.rank) // rank를 기준으로 오름차순 정렬
                .map((user, index) => (
                  <li key={index}>
                    <span>{user.rank}위</span> <span>{user.username}</span>
                  </li>
                ))}
            </Ranking>
          </RankingContainer>

          {/* 차트 */}
          <RankingContainer>
            <StatisticsTitle>스터디룸 통계</StatisticsTitle>
            <Chart />
          </RankingContainer>
        </StudyRoomStatistics>
      </StudyRoomWrapper>
    </BgWrapper>
  );
}
