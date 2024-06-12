import { forwardRef, HTMLAttributes, ReactNode } from "react";

// import Icons from "../../utils/svg_icons";

interface SvgColorProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  width?: number;
  height?: number;
}

// interface IconMap {
//   [key: string]: string;
// }

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, style, width = 12, height = 12, ...other }, ref) => {
    // const source = new URL(`${src}`, import.meta.url).href;

    // if (src === undefined) {
    //   return null;
    // }
    // const iconUrl = (Icons as IconMap)[src] || "";

    return (
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
    );
  }
);

export default SvgColor;
