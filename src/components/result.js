import styled from "styled-components";

export default function Result({
  minSize,
  maxSize,
  vwCoefficient,
  remCoefficient,
  ...delegated
}) {
  const computedClamp = `clamp(${minSize}rem, ${vwCoefficient}vw ${
    remCoefficient >= 0 ? "+" : "-"
  } ${Math.abs(remCoefficient)}rem, ${maxSize}rem)`;

  return (
    <ExampleText style={{ "--computed-clamp": computedClamp }} {...delegated} />
  );
}

const ExampleText = styled.textarea`
  width: 100%;
  display: block;
  margin: 0 auto;
  appearance: none;
  border: none;
  font-size: var(--computed-clamp);
  min-height: 0vh;
  font-family: "silkabold";
  font-weight: bold;
  resize: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
