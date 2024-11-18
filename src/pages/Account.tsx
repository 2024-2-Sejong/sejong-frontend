import styled from "styled-components";
import QuiteStudyRoom from "../components/QuiteStudyRoom";

const Wrapper = styled.div`
  width: 100vw;
  padding: 96px 138px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 32px;
  }

  h2 {
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    color: var(--primary-color);
  }
`;

const SubContainer = styled.div`
  display: grid;
  margin-top: 64px;
  grid-template-columns: 4fr 5fr;
  gap: 40px;
`;

const SubContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 20px;
`;

const WhiteBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 36px;
  background-color: var(--white-color);
  border-radius: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default function Account() {
  return (
    <Wrapper>
      <Titles>
        <h2>My Page</h2>
        <h1>마이페이지</h1>
      </Titles>

      <SubContainer>
        <SubContainerSection>
          <SubTitle>스터디룸 관리</SubTitle>
          <WhiteBox>
            <ul>
              <QuiteStudyRoom />
              <QuiteStudyRoom />
              <QuiteStudyRoom />
              <QuiteStudyRoom />
              <QuiteStudyRoom />
            </ul>
          </WhiteBox>
        </SubContainerSection>
        <SubContainerSection>
          <SubTitle>나의 업적</SubTitle>
          <WhiteBox></WhiteBox>
        </SubContainerSection>
      </SubContainer>
    </Wrapper>
  );
}
