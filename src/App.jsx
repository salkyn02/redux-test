import { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
   <div>
     <button
      onClick={() => {
        dispatch({type: INCREMENT});
      }}
    >
      {state}
    </button>
     <button
      onClick={() => {
        dispatch({type: DECREMENT});
      }}
    >
      -{state}
    </button>
   </div>
  );
}

export default App;
