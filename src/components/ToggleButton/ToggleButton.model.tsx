export interface ToggleButtonStyledProps {
  distance?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  shadow?: string;
  color: string;
}

export interface ToggleButtonPropsState {
  distance?: number;
  intensity?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  color?: string;
  lineColor?: string;
  isReverseShadow?: boolean;
}
export interface ToggleButtonProps {
  normal: ToggleButtonPropsState;
  hovered?: ToggleButtonPropsState;
  toggled?: ToggleButtonPropsState;
  disabled?: ToggleButtonPropsState;
  consonants?: number[];
  vowels?: number[];
  onClick?: (isToggled: boolean) => void;
  isDisabled?: boolean;
}

export interface NeumorphismColors {
  shadow: string;
  base: string;
  highlight: string;
}
