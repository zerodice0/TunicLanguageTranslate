import styled from "styled-components";

import { ToggleButtonStyledProps } from "./ToggleButton.model";

export const ToggleButtonStyled = styled.div<ToggleButtonStyledProps>`
  border-radius: ${props => props.radius ?? 5}px;
  padding: ${props => props.padding ?? 0}px;
  background: ${props => props.color ?? "#ffffff"};
  box-shadow: ${props => props.backgroundShadow},
    ${props => props.foregroundShadow};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.hoverColor ?? props.color};
    box-shadow: ${props => props.hoverBackgroundShadow},
      ${props => props.hoverForegroundShadow};
  }
`;
