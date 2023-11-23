const ADD_CARD = 'ADD_CARD';
const DELETE_CARD = 'DELETE_CARD';
const FILTER_CARD = 'FILTER_CARD';
// "id" + Math.random().toString(16).slice(2)
const initialState = {
    allCards: [],
    filtredCard: [],
    isFiltred: false,
};

export default function cardListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            return {
                ...state,
                allCards: [...state.allCards, action.payload],
            };
        }
    }
}
