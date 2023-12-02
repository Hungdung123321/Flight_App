import Svg, { Path } from "react-native-svg"

const IC_Eye = ({ style, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        style={style}
        {...props}
    >
        <Path
            stroke="#999DA3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2 12.5s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
        />
        <Path
            stroke="#999DA3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
    </Svg>
)
export default IC_Eye
