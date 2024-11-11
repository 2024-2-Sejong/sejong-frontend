import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--primary-bgColor);
`;

interface BgWrapperProps {
  children: ReactNode;
}

export default function BgWrapper({ children }: BgWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}
