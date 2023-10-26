const SET_USER_DATA = 'SET_USER_DATA';

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type ActionType = {
    type: string
    [key: string]: any
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state
    }
}

type SetAuthUserDataActionPayloadType = {
    id: number
    email: string
    login: string
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataActionType => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer