import Svg, {
    G,
    Mask,
    Path,
    Ellipse,
    Defs,
    RadialGradient,
    Stop,
    LinearGradient,
    ClipPath,
    Pattern,
    Use,
    Image,
} from "react-native-svg"
const IMG_OnBoard1 = ({ ...rest }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={500}
        height={486}
        preserveAspectRatio="none"
        fill="none"
        // style={{ position: "absolute", left: 0, right: 0 }}
        {...rest}
    >
        <G clipPath="url(#a)">
            <Mask
                id="b"
                width={360}
                height={486}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
            >
                <Path fill="#C4C4C4" d="M0 0h360v486H0z" />
            </Mask>
            <G mask="url(#b)">
                <Path fill="url(#c)" d="M-211.2-61.359h894.72v618.457H-211.2z" />
                <Path fill="url(#d)" d="M0-4.87h360V486H0z" />
            </G>
            <G opacity={0.4}>
                <Mask
                    id="e"
                    width={360}
                    height={988}
                    x={0}
                    y={0}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                >
                    <Path fill="#1E1F24" d="M360 0H0v988h360z" />
                </Mask>
                <G mask="url(#e)">
                    <Ellipse
                        cx={325.44}
                        cy={412.478}
                        fill="url(#f)"
                        opacity={0.5}
                        rx={325.44}
                        ry={412.478}
                        transform="matrix(-1 0 0 1 588.48 -181.296)"
                    />
                    <Ellipse
                        cx={336}
                        cy={425.862}
                        fill="url(#g)"
                        opacity={0.5}
                        rx={336}
                        ry={425.862}
                        transform="matrix(-1 0 0 1 429.12 -17.035)"
                    />
                </G>
            </G>
        </G>
        <Defs>
            <RadialGradient
                id="f"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 412.478 -325.44 0 325.44 412.478)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#8A1BE0" />
                <Stop offset={1} stopColor="#1B1C24" stopOpacity={0} />
            </RadialGradient>
            <RadialGradient
                id="g"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 425.862 -336 0 336 425.862)"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#7C3FE0" />
                <Stop offset={1} stopColor="#1B1C24" stopOpacity={0} />
            </RadialGradient>
            <LinearGradient
                id="d"
                x1={180.384}
                x2={180.384}
                y1={221.465}
                y2={423.925}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#1B0E40" stopOpacity={0} />
                <Stop offset={1} stopColor="#101114" />
            </LinearGradient>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h360v486H0z" />
            </ClipPath>
            <Pattern
                id="c"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#h" transform="matrix(.00042 0 0 .0006 -.02 0)" />
            </Pattern>
            <Image
                id="h"
                width={2500}
                height={1663}
            />
        </Defs>
    </Svg>
)
export default IMG_OnBoard1