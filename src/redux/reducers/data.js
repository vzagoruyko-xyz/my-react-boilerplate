import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL } from '../actions/dataActions';

const initialState = {
    list: [],
    isFetching: false,
    isError: '',
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state, isFetching: true, isError: '' }

        case GET_DATA_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, isError: '' }

        case GET_DATA_FAIL:
            return { ...state, isError: action.payload, isFetching: false }

        default:
            return state
    }
}