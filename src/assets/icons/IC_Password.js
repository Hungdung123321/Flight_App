import Svg, { Path } from "react-native-svg"
import { StyledView } from "../../components/ReactCores/ReactCoreStyled"

const SvgComponent = ({ classNameSVG, ...props }) => (
    <StyledView className={classNameSVG}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} stroke={'#5A5A5A'} fill="none" {...props}>
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 2H6.5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L15 2Z"
            />
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.5 12h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM15.5 12v-2a3 3 0 0 0-6 0v2"
            />
        </Svg>
    </StyledView>
)
export default SvgComponent
