import { svgProps } from "@/types";


export function SVG({ paths, fill = "currentColor", fillRule = "evenodd", width = "1em", height = "1em" }: svgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={{ minWidth: width, minHeight: height }} fill={fill} viewBox="0 0 16 16">
            {paths.map((path, ix) => (
                <path fillRule={fillRule} d={path} key={`svg-${ix}`} />
            ))}
        </svg>
    );
}