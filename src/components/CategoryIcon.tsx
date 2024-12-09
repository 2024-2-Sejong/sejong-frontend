import styled from "styled-components";

const Wrapper = styled.div<{ $bgColor: string }>`
  width: 100px;
  height: 32px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${(props) => props.$bgColor};
  color: var(--white-color);
  font-family: SUIT;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
`;

interface CategoryIcon {
  text: string;
  bgColor: string;
}

export default function CategoryIcon({ text, bgColor }: CategoryIcon) {
  return <Wrapper $bgColor={bgColor}>{text}</Wrapper>;
}
