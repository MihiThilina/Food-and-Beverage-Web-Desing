import { useUnit } from 'effector-react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './application.css';
import { $counter, buttonClicked } from './model';

export function App() {
  const [counter, handleClick] = useUnit([$counter, buttonClicked]);

  return (
    <div className="App">
      
    </div>
  );
}
