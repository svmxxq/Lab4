// App.js
import React from 'react';
import Tooltip from './components/Tooltip/Tooltip';
import './App.css';

const App = () => {
  return (
      <div>
        <Tooltip position="top" content="Вверху &hearts; ">
          <button>Вверху</button>
        </Tooltip>

        <Tooltip position="right" content="Справа &hearts; ">
          <button>Справа</button>
        </Tooltip>

        <Tooltip position="bottom" content="Внизу &hearts; ">
          <button>Внизу</button>
        </Tooltip>

        <Tooltip position="left" content="Слева &hearts;">
          <button>Слева</button>
        </Tooltip>
      </div>
  );
};

export default App;
