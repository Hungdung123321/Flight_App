import Svg, { Path } from "react-native-svg"

const IC_Chair = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            stroke="#555"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.833 7.5V5a1.667 1.667 0 0 0-1.666-1.667H5.833A1.667 1.667 0 0 0 4.167 5v2.5"
        />
        <Path
            stroke="#555"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.5 9.167v4.166A1.666 1.666 0 0 0 4.167 15h11.666a1.666 1.666 0 0 0 1.667-1.667V9.167a1.667 1.667 0 1 0-3.333 0v1.666H5.833V9.167a1.667 1.667 0 1 0-3.333 0v0ZM4.167 15v1.667M15.833 15v1.667"
        />
    </Svg>
)
export default IC_Chair
