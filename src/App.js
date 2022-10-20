
import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { showcounter } from './js/actions/counterActions';

function App() {
  const dispatch= useDispatch()
  const show=useSelector(state=>state.show)
  return (
    <div className="App">
      <button onClick={()=>dispatch(showcounter())} >{show ? "Hide" :"Show"}</button>
     {
      show ?  <Counter/>
       :<p>show counter</p>
     }
    </div>
  );
}

export default App;
