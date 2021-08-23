const initialState = {
    data: []
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log(action.payload.id);
            return { data: [...state.data, action.payload] }

        case "DELETE_DATA":
            console.log(action);
            return { data: state.data.filter((cvalue) => cvalue.id !== action.payload.id) }

        default:
            return state
    }
}

export default TodoReducer;