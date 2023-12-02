import Svg, { Path } from "react-native-svg"

const IC_Landing = (props) => (
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
            strokeWidth={1.5}
            d="M9 20.25h13.5M2.25 9.722V4.79a.75.75 0 0 1 .984-.713L4.5 4.5 6 7.312l3 .938V4.79a.75.75 0 0 1 .984-.712l1.266.422 3 5.25 4.556 1.266A2.99 2.99 0 0 1 21 13.903v3.347L4.444 12.61A2.99 2.99 0 0 1 2.25 9.721v0Z"
        />
    </Svg>
)
export default IC_Landing
