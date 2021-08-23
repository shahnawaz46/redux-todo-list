export const addData = (value) => {
    return {
        type: "ADD_DATA",
        payload: {
            id: Math.random(),
            value: value
        }
    }
}

export const deleteData = (data) => {
    return {
        type: "DELETE_DATA",
        payload: data
    }
}