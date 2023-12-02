import Svg, { Path } from "react-native-svg"

const IMG_BGflight = ({ style, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={360}
        height={650}
        fill="none"
        {...props}
    >
        <Path
            fill="#E3E4E5"
            d="M332.25 369 360 386.5V498l-27.75-10V369ZM27.75 369 0 386.5V498l27.75-10V369Z"
        />
        <Path
            fill="#fff"
            d="M16.31 650H343.69s.141-24.21.311-60.719c-1.002-101.302-3.089-297.298-4.564-333.604-.624-15.113-2.94-45.553-10.004-80.326-17.8-68.381-54.596-157.91-126.843-173.12C195.421.859 187.897.092 180 0c-7.897.09-15.421.858-22.589 2.232C85.164 17.44 48.368 106.969 30.568 175.35c-7.064 34.773-9.38 65.213-10.004 80.326C19.09 291.983 17.002 487.98 16 589.281c.17 36.51.31 60.719.31 60.719Z"
        />
        <Path
            fill="#E3E4E5"
            d="M81.29 142H65l16.29-55.113 18.735 19.331L81.291 142ZM177 72.492l-72.902 30.024-20.77-20.153L177 40v32.492ZM278.709 142H295l-16.291-55.113-18.734 19.331L278.709 142ZM183 72.492l72.902 30.024 20.771-20.153L183 40v32.492Z"
        />
    </Svg>
)
export default IMG_BGflight
