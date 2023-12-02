import Svg, { Path } from "react-native-svg"

const IC_ArrowDownUp = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#555"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m10.5 16.5-3 3-3-3M7.5 4.5v15M13.5 7.5l3-3 3 3M16.5 19.5v-15"
        />
    </Svg>
)
export default IC_ArrowDownUp
