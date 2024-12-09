import styled from "styled-components";
import Header from "../components/Header";
import CategoryIcon from "../components/CategoryIcon";
import SubmitComponent from "../components/SubmitComponent";
import Chart from "../components/Chart";
import BgWrapper from "../components/BgWrapper";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getUserDifficulty,
  studyRoomDetail,
  studyRoomProblem,
} from "../utils/api";

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
  score: number;
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

interface studyRoomProblemProps {
  category_list: string[];
  name: string;
  problem_id: number;
  url: string;
}

interface userDifficultyProps {
  category: string;
  difficulty: number;
}

// 사용자 추천 문제를 가져오는 함수
const fetchUserProblem = async (studyRoomId: string, token: string) => {
  const userDifficulty: userDifficultyProps[] = await getUserDifficulty(token);
  return studyRoomProblem({
    input_correct_rate: 30,
    input_difficulty: userDifficulty[2].difficulty,
    input_category: ["다이나믹 프로그래밍"],
    input_source: ["baekjoon"],
    input_language: ["Python 3"],
  });
};

export default function StudyRoom() {
  const { id } = useParams();
  const token = localStorage.getItem("authMessage");

  const { data, isLoading, error } = useQuery<studyRoomDetailProps>({
    queryKey: ["studyroom", id],
    queryFn: () => studyRoomDetail(id!),
  });

  const defaultStatistics = {
    Graph: 0,
    Implementation: 0,
    DP: 0,
    String: 0,
    DataStructure: 0,
    Greedy: 0,
  };

  const statistics = { ...defaultStatistics, ...data?.statistics };

  const {
    data: problemData,
    isLoading: problemLoading,
    error: problemError,
  } = useQuery<studyRoomProblemProps>({
    queryKey: ["problem", id],
    queryFn: () =>
      studyRoomProblem({
        input_correct_rate: 30,
        input_difficulty: 5,
        input_category: ["그리디"],
        input_source: ["baekjoon"],
        input_language: ["Python 3"],
      }),
  });

  const {
    data: userProblemData,
    isLoading: userProblemLoading,
    error: userProblemError,
  } = useQuery<studyRoomProblemProps>({
    queryKey: ["userProblem", id],
    queryFn: () => fetchUserProblem(id!, token!),
    enabled: !!token, // 토큰이 준비되었을 때만 실행
  });

  if (isLoading || problemLoading || userProblemLoading) {
    return <div>Loading...</div>;
  }

  if (error || problemError || userProblemError) {
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
        {/* 방 정보 섹션 */}
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

        {/* 문제 섹션 */}
        {problemData && (
          <TodayProblemContatiner>
            <h2>방의 전체 문제</h2>
            <TodayProblemMessage>
              방 문제 리스트를 확인하세요!
            </TodayProblemMessage>
            <SubmitComponent
              category_list={problemData.category_list}
              name={problemData.name}
              problem_id={problemData.problem_id}
              url={problemData.url}
              studyRoomId={id!}
            />
          </TodayProblemContatiner>
        )}

        {userProblemData && (
          <TodayProblemContatiner>
            <h2>사용자 추천 문제</h2>
            <TodayProblemMessage>
              사용자 맞춤 문제를 확인해보세요!
            </TodayProblemMessage>
            <SubmitComponent
              category_list={userProblemData.category_list}
              name={userProblemData.name}
              problem_id={userProblemData.problem_id}
              url={userProblemData.url}
              studyRoomId={id!}
            />
          </TodayProblemContatiner>
        )}

        {/* 통계 섹션 */}
        <StudyRoomStatistics>
          <RankingContainer>
            <StatisticsTitle>스터디원 랭킹</StatisticsTitle>
            <Ranking>
              {data?.ranking
                .sort((a, b) => b.score - a.score)
                .map((user, index) => (
                  <li key={index}>
                    <span>{index + 1}위</span> <span>{user.username}</span>
                  </li>
                ))}
            </Ranking>
          </RankingContainer>
          <RankingContainer>
            <StatisticsTitle>스터디룸 통계</StatisticsTitle>
            <Chart statistics={statistics} />
          </RankingContainer>
        </StudyRoomStatistics>
      </StudyRoomWrapper>
    </BgWrapper>
  );
}
