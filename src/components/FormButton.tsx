import styled from "styled-components";

const ButtonStyle = styled.button<{ $bgcolor: string; $textcolor: string }>`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$textcolor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

export default function FormButton({
  text,
  bgcolor,
  textcolor,
  onClick,
}: {
  text: string;
  bgcolor: string;
  textcolor: string;
  onClick?: () => void;
}) {
  return (
    <ButtonStyle
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      type="submit"
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
}
