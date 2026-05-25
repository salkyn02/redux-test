import { useDispatch, useSelector } from "react-redux";
import {INCREMENT, DECREMENT} from "./main"

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>{
    return state
  })

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
