import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface SvgColorProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  width?: number;
  height?: number;
}

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, style, width = 12, height = 12, ...other }, ref) => (
    <span
      ref={ref}
      style={{
        width,
        height,
        display: "inline-block",
        backgroundColor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...style,
      }}
      {...other}
    />
  )
);

export default SvgColor;
