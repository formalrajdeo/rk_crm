const FormReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET':
            return action.initialState;
        default:
            return state;
    }
}

export default FormReducer