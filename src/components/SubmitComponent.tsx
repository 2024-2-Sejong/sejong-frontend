import styled from "styled-components";
import CreateButton from "./CreateButton";
import CategoryIcon from "./CategoryIcon";

const Wrapper = styled.div`
  border-radius: 20px;
  height: 316px;
  border: 1px solid rgba(188, 188, 188, 1);
  background-color: rgba(85, 38, 255, 0.1);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr;
  align-items: end;
  padding: 44px 45px;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ProblemTitle = styled.p`
  font-size: 45px;
  font-weight: 800;
  line-height: 45px;
  margin-top: 100px;
  margin-bottom: 51px;
`;

const CategoryIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const EndSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

export default function SubmitComponent() {
  return (
    <Wrapper>
      <img src="/character.png" alt="ocoteCharacter" />
      <MiddleSection>
        <ProblemTitle>배열 돌리기4</ProblemTitle>
        <CategoryIcons>
          <CategoryIcon text="카테고리 1" bgColor="rgba(0, 0, 0, 0.7)" />
          <CategoryIcon text="카테고리 1" bgColor="rgba(0, 0, 0, 0.7)" />
          <CategoryIcon text="카테고리 1" bgColor="rgba(0, 0, 0, 0.7)" />
        </CategoryIcons>
      </MiddleSection>
      <EndSection>
        <CreateButton
          text="코드 제출하기"
          bgColor="var(--primary-color)"
          textColor="white"
          borderRadius={1}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </EndSection>
    </Wrapper>
  );
}
