import { useEffect, useState } from "react";

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
    if (isPushed) {
      return checked?.lineColor;
    } else if (isHovered) {
      return hover?.lineColor;
    }

    return normal?.lineColor;
  };

  const getBackground = () => {
    if (isPushed) {
      return checked?.color ?? "#dddddd";
    } else if (isHovered) {
      return hover?.color ?? "#dddddd";
    }

    return normal.color ?? "#dddddd";
  };

  const getShadow = () => {
    if (isPushed) {
      const colors = calculateShadowColors(
        checked?.color ?? color,
        checked?.intensity ?? intensity
      );

      return calculateBackgroundShadowProps(
        checked?.distance ?? distance,
        checked?.blur ?? blur,
        colors?.shadow ?? shadow,
        colors?.highlight ?? highlight,
        checked?.isReverseShadow ?? false
      );
    } else if (isHovered) {
      const colors = calculateShadowColors(
        hover?.color ?? color,
        hover?.intensity ?? intensity
      );

      return calculateBackgroundShadowProps(
        hover?.distance ?? distance,
        hover?.blur ?? blur,
        colors?.shadow ?? shadow,
        colors?.highlight ?? highlight,
        hover?.isReverseShadow ?? false
      );
    }

    const colors = calculateShadowColors(
      normal.color ?? color,
      normal.intensity ?? intensity
    );

    return calculateBackgroundShadowProps(
      normal.distance ?? distance,
      normal.blur ?? blur,
      colors?.shadow ?? shadow,
      colors?.highlight ?? highlight,
      normal?.isReverseShadow ?? false
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
  const { shadow, base, highlight } =
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
