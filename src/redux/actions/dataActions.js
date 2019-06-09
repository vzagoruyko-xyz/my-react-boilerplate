export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

export function getData(url) {
    return (dispatch) => {
        dispatch({
            type: GET_DATA_REQUEST,
        })

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_ARTICLE_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ARTICLE_FAIL,
                payload: error,
            })
        })
    }
}