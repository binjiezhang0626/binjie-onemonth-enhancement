import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/actions'

const initState = [
  {
    text: "Wake up",
    completed: false
  },
  {
    text: "Eat breakfast",
    completed: false
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
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

export default rootReducer;
