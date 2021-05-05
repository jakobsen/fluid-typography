import { useState, useEffect } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useWindowDimensions from "./useWindowDimensions";
import { GitHub, Clipboard } from "react-feather";

function oneDecimal(x) {
  return Math.round(10 * x) / 10;
}

function App() {
  const [exampleText, setExampleText] = useState("Result (edit me!)");
  const [minWidth, setMinWidth] = useState(700);
  const [minSize, setMinSize] = useState(1.5);
  const [maxWidth, setMaxWidth] = useState(1000);
  const [maxSize, setMaxSize] = useState(3);
  const [vwCoefficient, setVwCoefficient] = useState();
  const [remCoefficient, setRemCoefficient] = useState();
  const [clampString, setClampString] = useState("");
  const [linebreakClampString, setLineBreakClampString] = useState("");
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    console.log(windowWidth);
    setVwCoefficient(
      oneDecimal((1600 * (maxSize - minSize)) / (maxWidth - minWidth))
    );
    setRemCoefficient(
      oneDecimal(
        minSize - (minWidth * (maxSize - minSize)) / (maxWidth - minWidth)
      )
    );
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
  }, [maxSize, minSize, maxWidth, minWidth, vwCoefficient, remCoefficient]);

  function copyText() {
    navigator.clipboard.writeText(`font-size: clamp${clampString};`);
  }

  return (
    <>
      <Wrapper>
        <Heading>Fluid typography</Heading>
        <Blurb>
          Create text that scales with the window size, so that your headings
          look great on any screen. This technique is taken from the{" "}
          <Link href="https://css-for-js.dev/">
            wonderful CSS course by Josh Comeau
          </Link>
          .
        </Blurb>
        <Grid>
          <h2>Minimum size</h2>
          <p>
            <Input
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
            />
            <code>rem</code> at a viewport width of{" "}
            <Input
              value={minWidth}
              onChange={(e) => setMinWidth(e.target.value)}
            />
            <code>px</code>.
          </p>
          <h2>Maximum size</h2>
          <p>
            <Input
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            />
            <code>rem</code> at a viewport width of{" "}
            <Input
              value={maxWidth}
              onChange={(e) => setMaxWidth(e.target.value)}
            />
            <code>px</code>.
          </p>
        </Grid>
        <Code>
          <Property>font-size:</Property> <Func>clamp</Func>
          {windowWidth > 700 ? clampString : linebreakClampString};
          <Tippy
            content="Copied!"
            trigger="click"
            onShow={(instance) => {
              setTimeout(() => {
                instance.hide();
              }, 1500);
            }}
          >
            <CopyButton onClick={copyText}>
              <VisuallyHidden>Copy to clipboard</VisuallyHidden>
              <Clipboard />
            </CopyButton>
          </Tippy>
        </Code>
        <ExampleText
          rows={3}
          value={exampleText}
          onChange={(e) => setExampleText(e.target.value)}
          style={{
            "--computed-clamp": `clamp${clampString}`,
          }}
        />
      </Wrapper>
      <Pusher />
      <Footer>
        <ButtonLink
          href="https://github.com/jakobsen/fluid-typography"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </ButtonLink>
      </Footer>
    </>
  );
}

const Heading = styled.h1`
  font-size: clamp(2.5rem, 3.2vw + 2rem, 4rem);
  font-family: "silkabold";
  text-align: center;
  margin: 32px;
  line-height: 1.2;
  background-size: 100%;
  background: rgb(2, 0, 36);
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 57%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  line-height: 1.6;
`;

const Grid = styled.div`
  margin: 0 auto;
  gap: 8px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: baseline;
  max-width: 550px;
  & h2 {
    text-align: left;
  }

  & p {
    text-align: right;
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    & h2 {
      text-align: center;
    }

    & p {
      text-align: center;
    }
  }
`;

const Blurb = styled.p`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

const ExampleText = styled.textarea`
  width: 100%;
  display: block;
  text-align: center;
  margin: 0 auto;
  appearance: none;
  border: none;
  font-size: var(--computed-clamp);
  font-family: "silkabold";
  font-weight: bold;
  resize: none;
`;

const Input = styled.input`
  font-size: 1rem;
  width: 3.5rem;
  text-align: center;
  display: inline-block;
  border: none;
  background-color: hsl(180deg 10% 93%);
  font-family: "silka_monoregular";

  &:focus {
    font-family: "silka_monosemibold";
  }

  font-size: clamp(1rem, x, 5rem);
`;

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
  margin-bottom: 32px;
`;

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

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const Property = styled.span`
  color: hsl(320deg 100% 35%);
`;

const Func = styled.span`
  color: hsl(200deg 100% 30%);
`;

const Pusher = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
`;

const ButtonLink = styled.a`
  color: hsl(200deg 5% 40%);

  &:hover {
    color: hsl(0deg 0% 0%);
  }
`;

const Link = styled.a`
  color: hsl(199.9deg 91.4% 36.3%);

  &:hover {
    font-family: 'silkabold';
  }
`;

export default App;
