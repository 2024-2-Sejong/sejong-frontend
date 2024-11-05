import styled from "styled-components";

const ButtonStyle = styled.button<{
  $bgcolor: string;
  $textcolor: string;
  $check: boolean;
}>`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$check ? "rgba(85, 38, 255, 0.4)" : props.$bgcolor};
  color: ${(props) => props.$textcolor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

interface FormButtonProps {
  text: string;
  bgcolor: string;
  textcolor: string;
  check: boolean;
  onClick?: () => void;
}

export default function FormButton({
  text,
  bgcolor,
  textcolor,
  onClick,
  check,
}: FormButtonProps) {
  return (
    <ButtonStyle
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      $check={check}
      type="submit"
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
}
