import { useState } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

function App() {
    const [inProp, setInProp] = useState(false);
//   return (
//     <div>
//       <Transition in={inProp} timeout={duration}>
//         {state => (
//             <div style={{...defaultStyle,...transitionStyles[state]}}>
//                 Очко дьявола
//             </div>
//         )}
//       </Transition>
//       <button onClick={() => setInProp(true)}>
//         Click to Enter
//       </button>
//     </div>
//   );
// }
    return (
        <div className="App">
            <Calendar />
            {/* <TaskList /> */}
        </div>
    );
}

export default App;
