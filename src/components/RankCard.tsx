import styled from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  height: 430px;
  border-radius: 20px;
`;

const CardTitleContainer = styled.div`
  width: 100%;
  height: 103px;
  border-radius: 20px 20px 0 0;
  background-color: var(--primary-color);
`;

export default function RankCard() {
  return (
    <Wrapper>
      <CardTitleContainer />
    </Wrapper>
  );
}
