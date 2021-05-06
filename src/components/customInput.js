import styled from "styled-components";

const CustomInput = styled.input`
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

export default CustomInput;