import { Home, Login, Review, Signup } from "../screens"

export const ROUTES_NAME = {
    HOME_ROUTE: 'HomeRoute',
    AUTH_ROUTE: 'AuthRoute',
}

export const DRAWER_NAME = {
    MAIN_DRAWER: 'MainDrawer',
    REVIEW_DRAWER: 'ReviewDrawer',
    TAB_NAVIGATOR_DRAWER: 'TabNavigatorDrawer',
}

export const TABS_NAME = {
    HOME_NAVIGATOR: 'HomeNavigator',
    DETAIL_NAVIGATOR: 'DetailNavigator',
}

export const SCREEN_NAME = {
    LOGIN: 'Login',
    SIGNUP: 'Signup',
    HOME: 'Home',
    DETAIL: 'detail',
    REVIEW: 'Review'
}

export const SCREEN_ID = {
    LOGIN: 'Login',
    SIGNUP: 'Signup',
    HOME: 'Home',
    DETAIL: 'detail',
    REVIEW: 'Review'
}


// App routes
export const HomeScreen = {
    name: SCREEN_NAME.HOME,
    screen_id: SCREEN_ID.HOME,
    component: Home,
}

// Auth routes
export const LoginScreen = {
    name: SCREEN_NAME.LOGIN,
    screen_id: SCREEN_ID.LOGIN,
    component: Login,
}

export const SignupScreen = {
    name: SCREEN_NAME.SIGNUP,
    screen_id: SCREEN_ID.SIGNUP,
    component: Signup,
}

// Review Routes
export const ReviewScreen = {
    name: SCREEN_NAME.REVIEW,
    screen_id: SCREEN_ID.REVIEW,
    component: Review,
}

export const AuthRoutes = [
    LoginScreen,
    SignupScreen
]

export const HomeRoutes = [
    HomeScreen,
]

export const ReviewRoutes = [
    ReviewScreen,
]

