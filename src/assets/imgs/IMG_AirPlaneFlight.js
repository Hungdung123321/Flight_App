import Svg, { Path, Circle } from "react-native-svg"

const AirPlaneFlight = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={140}
        height={36}
        fill="none"
        {...props}
    >
        <Path stroke="#D0D0D0" d="M2 18.031h136" />
        <Circle cx={3.5} cy={18} r={3.5} fill="#D0D0D0" />
        <Circle cx={136.5} cy={18} r={3.5} fill="#D0D0D0" />
        <Circle cx={70} cy={18} r={18} fill="#EC441E" />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M64.75 26.25h13.5M60.513 13.5h1.612L64 15.75h3l-1.172-3.516a.75.75 0 0 1 .713-.984h1.584l4.125 4.5h5.25a3 3 0 0 1 3 3V21H63.981a3 3 0 0 1-2.869-2.137l-1.321-4.397a.75.75 0 0 1 .722-.966v0Z"
        />
    </Svg>
)
export default AirPlaneFlight