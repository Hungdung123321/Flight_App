import { APP_FONTS } from '../assets/fonts';
import { COLORS } from './colors';
import moment from 'moment';

export const initialDate = {
    nowDate: moment().format(FORMAT),
    startDate: moment().format(FORMAT),
    endDate: moment().format(FORMAT),
}

export const FORMAT = 'YYYY-MM-DD';

export const WAY_SELECTION_TABVIEW_KEY = {
    ONE_WAY: 'OneWay',
    ROUND: 'Round',
    MULTICITY: 'Multicity',
}

export const WAY_SELECTION_TABVIEW_ROUTES = [
    {
        key: WAY_SELECTION_TABVIEW_KEY.ONE_WAY,
        title: 'One way',
        disableRange: true
    },
    {
        key: WAY_SELECTION_TABVIEW_KEY.ROUND,
        title: 'Round',
        disableRange: false
    },
    {
        key: WAY_SELECTION_TABVIEW_KEY.MULTICITY,
        title: 'Multicity',
    }
]


export const THEME_CALENDER = {
    monthTitleTextStyle: {
        fontFamily: APP_FONTS.REGULAR,
        color: COLORS.DARK_GRAY,
        fontSize: 18,
        textAlign: 'left',
    },
    weekColumnsContainerStyle: {
        backgroundColor: '#e6e8e780'
    },
    weekColumnStyle: {
        paddingVertical: 10,
    },
    weekColumnTextStyle: {
        color: COLORS.BLACK,
        fontFamily: APP_FONTS.MEDIUM,
        fontSize: 16,
    },
    startDateContainerStyle: {
        backgroundColor: COLORS.ORIOLES_ORANGE,
        color: COLORS.WHITE
    },
    dayContainerStyle: {
        backgroundColor: 'transparent'
    },
    dayTextStyle: {
        fontFamily: APP_FONTS.REGULAR,
        fontSize: 14,
        color: COLORS.GRAY
    },
    activeDayContainerStyle: {
        backgroundColor: COLORS.ORIOLES_ORANGE,
    },
    activeDayTextStyle: {
        color: 'white',
    },
}

export const NUMBER_OF_MONTHS = 11