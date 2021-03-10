import { GET_INFO } from "../type"
const fn = (state, action) => {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                starwars: action.payload
            }
        default:
            return state;
    }
};
export default fn;