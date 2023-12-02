import Svg, { Path } from "react-native-svg"

const IC_Back = ({ style, restSvg }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        style={style}
        {...restSvg}
    >
        <Path
            stroke="#191D23"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 18-6-6 6-6"
        />
    </Svg>
)
export default IC_Back
