import { SWITCH_THEME } from "../actions/types"

const themes = {
    light: {
        name: "light",
        colors: {
            main: "#c9933e",
            secondary: "",
            background: "#f5f5f5"
        },
        text: {
            highContrast: "#000000",
            light: "#ffffff",
            dark: "#000000",
            soft: "#555555"
        }
    },
    dark: {
        name: "dark",
        colors: {
            main: "#c9933e",
            secondary: "",
            background: "#161616"
        },
        text: {
            highContrast: "#ffffff",
            light: "#ffffff",
            dark: "#000000"
        }
    }
}

const initialState = {
    selectedTheme: themes.light
}

const theme = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case SWITCH_THEME:
            newState.selectedTheme =
                state.selectedTheme.name === "light"
                    ? themes.dark
                    : themes.light
            break
    }

    return { ...newState }
}

export default theme
