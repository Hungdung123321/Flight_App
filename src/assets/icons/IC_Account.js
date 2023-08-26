import Svg, { Path } from "react-native-svg"
import { StyledView } from "../../components/ReactCores/ReactCoreStyled"

const SvgComponent = ({ classNameSVG, ...props }) => (
    <StyledView className={classNameSVG}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} stroke={'#5A5A5A'} fill="none" {...props}>
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.5 21v-2a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v2M12.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            />
        </Svg>
    </StyledView>
)
export default SvgComponent
