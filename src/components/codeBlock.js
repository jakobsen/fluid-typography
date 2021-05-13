import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useWindowDimensions from "hooks/useWindowDimensions";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Clipboard } from "react-feather";
import CopyButton from "components/copyButton";
import VisuallyHidden from "components/visuallyHidden";

export default function CodeBlock({
  minSize,
  maxSize,
  vwCoefficient,
  remCoefficient,
}) {
  const [clampString, setClampString] = useState("");
  const [linebreakClampString, setLineBreakClampString] = useState("");
  const [tippyVisible, setTippyVisible] = useState(false);
  const [tippyText, setTippyText] = useState("");
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    setClampString(
      `(${minSize}rem, ${vwCoefficient}vw ${
        remCoefficient >= 0 ? "+" : "-"
      } ${Math.abs(remCoefficient)}rem, ${maxSize}rem)`
    );
    setLineBreakClampString(
      `(\n  ${minSize}rem,\n  ${vwCoefficient}vw ${
        remCoefficient >= 0 ? "+" : "-"
      } ${Math.abs(remCoefficient)}rem\n  ${maxSize}rem\n)`
    );
  }, [minSize, vwCoefficient, remCoefficient, maxSize]);

  function showTippy(text) {
    if (!tippyVisible) {
      setTippyText(text);
      setTippyVisible(true);
      setTimeout(() => {
        setTippyVisible(false);
      }, 1500);
    }
  }

  function copyText() {
    navigator.clipboard
      .writeText(`font-size: clamp${clampString};`)
      .then(() => showTippy("Copied!"))
      .catch(() => showTippy("Could not copy to clipboard :("));
  }

  return (
    <Code remCoefficient={remCoefficient}>
      <Property>font-size:</Property> <Func>clamp</Func>
      {windowWidth > 700 ? clampString : linebreakClampString};
      <Tippy content={tippyText} visible={tippyVisible}>
        <CopyButton onClick={copyText}>
          <VisuallyHidden>Copy to clipboard</VisuallyHidden>
          <Clipboard />
        </CopyButton>
      </Tippy>
    </Code>
  );
}

const Code = styled.pre`
  position: relative;
  display: block;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: hsl(180deg 10% 93%);
  font-size: 1rem;
  white-space: pre-wrap;
  margin-bottom: ${(p) =>
    Math.abs(p.remCoefficient) < 1 ? "32px" : "134.4px"};

  @media (max-width: 700px) {
    margin-bottom: 32px;
  }
`;

const Property = styled.span`
  color: hsl(320deg 100% 35%);
`;

const Func = styled.span`
  color: hsl(200deg 100% 30%);
`;

export { Property, Func };
