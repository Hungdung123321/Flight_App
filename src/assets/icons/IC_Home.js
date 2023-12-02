import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/colors"

const IC_Home = ({ fill, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
        />
        <Path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 22V12h6v10"
        />
    </Svg>
)
export default IC_Home
