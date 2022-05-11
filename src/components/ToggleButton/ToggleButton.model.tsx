export interface ToggleButtonStyledProps {
  distance?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  shadow?: string;
  color: string;
}

interface ToggleButtonPropsComponent {
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
  normal: ToggleButtonPropsComponent;
  hover?: ToggleButtonPropsComponent;
  checked?: ToggleButtonPropsComponent;
  consonants?: number[];
  vowels?: number[];
  onClick?: (isToggled: boolean) => void;
}

export interface NeumorphismColors {
  shadow: string;
  base: string;
  highlight: string;
}
