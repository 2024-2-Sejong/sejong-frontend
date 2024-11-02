import { forwardRef } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #a9a9a9;
  background-color: transparent;
  padding: 13px 12px;
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;

// React.forwardRef를 사용하여 ref를 받을 수 있도록 설정
const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <InputStyle {...props} ref={ref} />;
});

export default Input;
