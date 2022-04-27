import { ChangeEvent, useState } from 'react';
import Output from './components/Output';
import { Slider } from './components/Slider';
import TextValue from './components/TextValue';
import './global.css'

const App = () => {
  const [border, setBorder] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBorder(Number(event.target.value))
  }

  return (
    <div className="App">
      <Output border={border} />
      <TextValue border={border} />
      <Slider
        border={border}
        setBorder={setBorder}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
