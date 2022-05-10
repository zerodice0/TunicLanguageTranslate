import { useState } from "react";

import { LanguageRenderer } from "../LanguageRenderer/LanguageRenderer";
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
  checked,
  consonants = [],
  vowels = [],
}: ToggleButtonProps) => {
  const color = normal.color ?? "#dddddd";
  const intensity = normal.intensity ?? 5;
  const distance = normal.distance ?? 5;
  const blur = normal.blur ?? 10;
  const padding = normal.padding ?? 0;
  const radius = normal.radius ?? 5;

  const [isPushed, setPushed] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const getLineColor = () => {
    const _current =
      (isPushed ? checked : isHovered ? hover : normal) ?? normal;
    return _current.lineColor ?? color;
  };

  const getBackground = () => {
    const _current =
      (isPushed ? checked : isHovered ? hover : normal) ?? normal;
    return _current.color ?? color;
  };

  const getShadow = () => {
    const _current =
      (isPushed ? checked : isHovered ? hover : normal) ?? normal;

    const _colors = calculateShadowColors(
      _current.color ?? color,
      _current.intensity ?? intensity
    );

    return calculateBackgroundShadowProps(
      _current.distance ?? distance,
      _current.blur ?? blur,
      _colors?.shadow ?? shadow,
      _colors?.highlight ?? highlight,
      _current.isReverseShadow ?? false
    );
  };

  if (normal.color && !isValidRgbCode(normal.color)) {
    console.warn("Color is not valid, default color(#dddddd) is used.");
  }

  const defaultShadowColor = {
    shadow: "#a6a6a6",
    base: color,
    highlight: "#ffffff",
  };
  const { shadow, highlight } =
    calculateShadowColors(color, intensity) ?? defaultShadowColor;

  return (
    <ToggleButtonStyled
      distance={distance}
      blur={blur}
      padding={padding}
      radius={radius}
      color={getBackground()}
      shadow={getShadow().join(", ")}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={() => setPushed(!isPushed)}
    >
      <LanguageRenderer
        width={50}
        height={75}
        consonants={consonants}
        vowels={vowels}
        lineColor={getLineColor()}
        lineWidth={1}
        isDrawingFrame={true}
      />
    </ToggleButtonStyled>
  );
};
