export interface ToggleButtonStyledProps {
  distance?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  backgroundShadow: string;
  hoverBackgroundShadow: string;
  color: string;
  hoverColor: string;
  foregroundShadow: string;
  hoverForegroundShadow: string;
}

interface ToggleButtonPropsComponent {
  distance?: number;
  intensity?: number;
  blur?: number;
  padding?: number;
  radius?: number;
  color?: string;
}
export interface ToggleButtonProps {
  normal: ToggleButtonPropsComponent;
  hover?: ToggleButtonPropsComponent;
  children?: React.ReactNode;
}

export interface NeumorphismColors {
  shadow: string;
  base: string;
  highlight: string;
}
