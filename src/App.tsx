import { useState } from 'react';
import Output from './components/Output';
import { Slider } from './components/Slider';
import TextValue from './components/TextValue';
import './global.css'

function App() {
  const [border, setBorder] = useState(0)

  return (
    <div className="App">
      <Output border={border} />
      <TextValue border={border} />
      <Slider
        border={border}
        setBorder={setBorder}
      />
    </div>
  );
}

export default App;
