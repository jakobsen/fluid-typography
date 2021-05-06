import styled from "styled-components";
import { AlertCircle } from "react-feather";
import VisuallyHidden from "components/visuallyHidden";

export default function Warning({ children }) {
  return (
    <WarningDiv>
      <WarningIcon>
      <VisuallyHidden>Warning</VisuallyHidden>
        <AlertCircle size={24} />
      </WarningIcon>
      {children}
    </WarningDiv>
  );
}

const WarningDiv = styled.div`
  font-size: 1.125rem;
  border-radius: 8px;
  border: 2px solid;
  padding: 8px;
  width: min(530px, 100%);
  margin: 0 auto;
  color: hsl(0deg 100% 40%);
  position: relative;

  & code {
    background-color: hsl(0deg 100% 95%);
    border-radius: 1px;
    display: inline-block;
    padding: 1px 5px;
    margin: -1px -4px;
  }
`;

const WarningIcon = styled.div`
  position: absolute;
  top: -14px;
  left: -14px;
  background-color: hsl(0deg 0% 100%);
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
