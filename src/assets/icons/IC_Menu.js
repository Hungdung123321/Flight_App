import Svg, { Path } from "react-native-svg"

const IC_Menu = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16M4 6h16M4 18h16"
        />
    </Svg>
)
export default IC_Menu
