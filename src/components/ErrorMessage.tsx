import styled from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

interface ErrorMessageProps {
  children: ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <Wrapper>{children}</Wrapper>;
}
