import styled from "styled-components";

import { ToggleButtonStyledProps } from "./ToggleButton.model";

export const ToggleButtonStyled = styled.div<ToggleButtonStyledProps>`
  border-radius: ${props => props.radius ?? 5}px;
  padding: ${props => props.padding ?? 0}px;
  background: ${props => props.color ?? "#ffffff"};
  box-shadow: ${props => props.backgroundShadow},
    ${props => props.foregroundShadow};
`;
