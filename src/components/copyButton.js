import styled from "styled-components";

const CopyButton = styled.button`
  background: none;
  border: none;
  appearance: none;
  position: absolute;
  padding: 8px;
  right: 4px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsl(200deg 5% 40%);

  &:hover {
    color: hsl(0deg 0% 0%);
  }
`;

export default CopyButton;
