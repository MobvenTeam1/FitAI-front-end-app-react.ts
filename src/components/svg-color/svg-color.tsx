import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface SvgColorProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  width?: number;
  height?: number;
}

//

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, style, width = 12, height = 12, ...other }, ref) => {
    const source = new URL(`${src}`, import.meta.url).href;

    return (
      <span
        ref={ref}
        style={{
          width,
          height,
          display: "inline-block",
          backgroundColor: "currentColor",
          mask: `url(${source}) no-repeat center / contain`,
          WebkitMask: `url(${source}) no-repeat center / contain`,
          ...style,
        }}
        {...other}
      />
    );
  }
);

export default SvgColor;
