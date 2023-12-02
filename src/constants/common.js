import { IC_Bookings, IC_Home, IC_Inbox, IC_Offer, IC_Profile } from "../assets"
import { SCREEN_NAME } from "../routes/routes"

export const ICON_TABBAR = {
    [SCREEN_NAME.HOME]: <IC_Home />,
    [SCREEN_NAME.BOOKING]: <IC_Bookings />,
    [SCREEN_NAME.OFFER]: <IC_Offer />,
    [SCREEN_NAME.INBOX]: <IC_Inbox />,
    [SCREEN_NAME.PROFILE]: <IC_Profile />,
}

export const SELECTION_TYPE = {
    DEPART: 1,
    LANDING: 2,
}

export const FLIGHT_SELECTION_TYPE = {
    DEFAULT: 1,
    FROM_TO: 2,
    DEPARTURE_DAY: 3,
    RETURN_DAY: 4,
}

export const STYLE_BUTTON = {
    ACTIVE: true,
    INACTIVE: false,
}

export const SEAT_TYPE = {
    SELECTED: 1,
    RESERVED: 2,
    EMPTY: 3
}

export const SEAT_COLLUM = {
    LEFT: 1,
    RIGHT: 2,
}

export const NUMCOLLUM = 2

export const NAME_SEATS_EACH_ROW = {
    SEAT_FIST: 'A',
    SEAT_SECOND: 'B',
    SEAT_THIRD: 'C',
    SEAT_FOUR: 'D',
}