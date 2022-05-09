import { ToggleButtonProps } from "./ToggleButton.model";
import { ToggleButtonStyled } from "./ToggleButton.view";
import {
  calculateBackgroundShadowProps,
  calculateShadowColors,
  isValidRgbCode,
} from "./ToggleButton.viewModel";

export const ToggleButton = ({
  normal,
  hover,
  children,
}: ToggleButtonProps) => {
  const color = normal.color ?? "#dddddd";
  const intensity = normal.intensity ?? 5;
  const distance = normal.distance ?? 5;
  const blur = normal.blur ?? 10;
  const padding = normal.padding ?? 0;
  const radius = normal.radius ?? 5;

  if (normal.color && !isValidRgbCode(normal.color)) {
    console.warn("Color is not valid, default color(#dddddd) is used.");
  }

  const defaultShadowColor = {
    shadow: "#a6a6a6",
    base: color,
    highlight: "#ffffff",
  };
  const { shadow, base, highlight } =
    calculateShadowColors(color, intensity) ?? defaultShadowColor;

  const {
    shadow: hoverShadow,
    base: hoverBase,
    highlight: hoverHighlight,
  } = calculateShadowColors(
    hover?.color ?? color,
    hover?.intensity ?? intensity
  ) ?? defaultShadowColor;

  const [backgroundShadow, foregroundShadow] = calculateBackgroundShadowProps(
    distance,
    blur,
    shadow,
    highlight
  );

  const [hoverBackgroundShadow, hoverForegroundShadow] =
    calculateBackgroundShadowProps(
      hover?.distance ?? distance,
      hover?.blur ?? blur,
      hoverShadow,
      hoverHighlight
    );

  return (
    <ToggleButtonStyled
      distance={distance}
      blur={blur}
      padding={padding}
      radius={radius}
      color={base}
      backgroundShadow={backgroundShadow}
      foregroundShadow={foregroundShadow}
      hoverColor={hoverBase}
      hoverBackgroundShadow={hoverBackgroundShadow}
      hoverForegroundShadow={hoverForegroundShadow}
    >
      {children}
    </ToggleButtonStyled>
  );
};
