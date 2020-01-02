import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from '../actions/actions'

const initState = [
  {
    text: "Wake up",
    completed: false,
    id: 1
  },
  {
    text: "Eat breakfast",
    completed: false,
    id: 2
  },
];

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter((todo) => todo.id != action.index)
    default:
      return state
  }
}

export default rootReducer;
