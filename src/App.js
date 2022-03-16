import './App.css';

import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="App">
      <button type='button' onClick={() => setEnabled(!enabled)}>{ enabled ? "Disable" : "Enable"}</button>
      <input type="text" class="ico" disabled={!enabled}/>
    </div>
  );
}

export default App;
