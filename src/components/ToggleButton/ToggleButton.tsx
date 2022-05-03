import { ToggleButtonProps } from "./ToggleButton.model";
import { ToggleButtonStyled } from "./ToggleButton.view";
import {
  calculateShadowColors,
  isValidRgbCode,
} from "./ToggleButton.viewModel";

export const ToggleButton = ({
  distance = 5,
  blur = 10,
  padding = 0,
  radius = 5,
  color = "#ffffff",
  children,
}: ToggleButtonProps) => {
  if (!isValidRgbCode(color)) {
    color = "#dddddd";
    console.warn("Color is not valid, default color(#dddddd) is used.");
  }

  const { shadow, base, highlight } = calculateShadowColors(color) ?? {
    shadow: "#a6a6a6",
    base: color,
    highlight: "#ffffff",
  };

  const backgroundShadow = `${distance}px ${distance}px ${blur}px ${shadow}`;
  const foregroundShadow = `-${distance}px -${distance}px ${blur}px ${highlight}`;

  return (
    <ToggleButtonStyled
      distance={distance}
      blur={blur}
      padding={padding}
      radius={radius}
      color={base}
      backgroundShadow={backgroundShadow}
      foregroundShadow={foregroundShadow}
    >
      {children}
    </ToggleButtonStyled>
  );
};
