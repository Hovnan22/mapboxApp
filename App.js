import React, { useState } from 'react';

import { Provider } from 'react-redux';

import { Store } from "./src/config";
import { Navigation } from './src/navigation'



const App = () => {

  console.log({ Store })

  return (
    <Provider store={Store} >
      <Navigation />
    </Provider>
  );
};

export default App;
