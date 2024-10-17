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

export default function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <InputStyle {...props} />;
}
