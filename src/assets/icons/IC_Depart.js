import Svg, { Path } from "react-native-svg"

const IC_Depart = (props) => (
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
            d="M2.25 20.25h13.5M1.584 13.162l3.535 3.31a3 3 0 0 0 3.562.403l14.194-8.25-1.744-2.137a3 3 0 0 0-3.843-.685L13.125 8.25 7.5 6.375l-1.547.666a.75.75 0 0 0-.206 1.247l2.878 2.587L6 12.375 3.375 11.25l-1.575.675a.75.75 0 0 0-.216 1.237v0Z"
        />
    </Svg>
)
export default IC_Depart
