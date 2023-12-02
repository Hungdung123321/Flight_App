import Svg, { Path } from "react-native-svg"

const IC_Eyeoff = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            stroke="#4B5768"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.88 10.38a3 3 0 1 0 4.24 4.24M10.73 5.58c.421-.052.845-.08 1.27-.08 7 0 10 7 10 7a13.163 13.163 0 0 1-1.67 2.68"
        />
        <Path
            stroke="#4B5768"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6.61 7.11A13.526 13.526 0 0 0 2 12.5s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2.5l20 20"
        />
    </Svg>
)
export default IC_Eyeoff
