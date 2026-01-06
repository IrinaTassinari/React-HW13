const initialState = {usersList : [
    {
        id: 1,
        name: 'Maria'
    },
    {
        id: 2,
        name: 'Sasha'
    },
    {
        id: 3,
        name: 'Max'
    }
    ],
    textFilter: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,  //сохраняет usersList
                textFilter: action.payload} //обновляет только фильтр
        default:
            return state;
    }
}


export default reducer;