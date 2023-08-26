import React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { StyledView } from "../../components/ReactCores/ReactCoreStyled"
const SvgComponent = ({ classNameSVG, ...rest }) => (

    <StyledView className={`${classNameSVG}`}>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={104.316}
            height={100.154}
            fill="#5A5A5A"
            {...rest}
        >
            <Path
                fill="url(#a)"
                d="M46.943 85.74C34.22 72.1 30.867 61.723 31.43 38.464H9.616a9.616 9.616 0 0 1 0-19.232H31.43V2.183c0-.855.984-1.297 1.61-.713 1.501 1.401 4.152 3.937 8.362 8.147 7.385 7.384 9.973 9.616 9.973 9.616h11.392C73.39 19.232 82 27.841 82 38.463H51.375v5.404c0 4.136.258 8.293 1.231 12.313 1.88 7.755 4.642 13.12 9.445 16.971 10.982 8.804 26.908 4.762 39.953-.523a1.001 1.001 0 0 1 1.356 1.137l-5.042 23.394c-24.08 4.787-35.097 1.756-51.375-11.418Z"
            />
            <Path
                fill="url(#b)"
                d="M102.25 72.252 65.825 97.064c12.458 3.672 19.616 4.336 32.742.55l5.224-24.325c.189-.883-.795-1.545-1.541-1.037Z"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={23.987}
                    x2={99.295}
                    y1={12.83}
                    y2={99.295}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45A4FF" />
                    <Stop offset={1} stopColor="#0082FF" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={81.671}
                    x2={114.339}
                    y1={98.22}
                    y2={67.056}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#44A3FF" />
                    <Stop offset={1} stopColor="#44A3FF" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    </StyledView>

)
export default SvgComponent
