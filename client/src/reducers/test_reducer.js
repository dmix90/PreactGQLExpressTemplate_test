
export default function (state = {}, action) {
    switch (action.type) {
        case 'TEST':
            //do something
            return { ...state, test: action.payload };
        case 'GETONE':
            return { ...state, one: action.payload };
        default:
            return state;
    }
}