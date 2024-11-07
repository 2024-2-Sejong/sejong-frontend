import styled from "styled-components";

interface WrapperProps {
  $bgColor: string;
  $textColor: string;
  $borderRadius: number;
}

const Wrapper = styled.button<WrapperProps>`
  width: 180px;
  height: 50px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  border-radius: ${(props) => props.$borderRadius}px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

interface CreateButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  borderRadius: number;
  handleClick: () => void;
}

export default function CreateButton({
  text,
  bgColor,
  textColor,
  borderRadius,
  handleClick,
}: CreateButtonProps) {
  return (
    <Wrapper
      $bgColor={bgColor}
      $textColor={textColor}
      $borderRadius={borderRadius}
      onClick={handleClick}
    >
      {text}
    </Wrapper>
  );
}
