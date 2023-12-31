import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/colors"

const IC_Profile = ({ fill, ...props }) => (
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
            strokeWidth={2}
            d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
    </Svg>
)
export default IC_Profile
