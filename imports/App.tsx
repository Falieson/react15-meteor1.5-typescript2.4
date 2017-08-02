import * as React from 'react';
import Counter from './counter/CounterComponent'

const App: React.ReactElement<{}> = (
  <div className='app-container'>
    <Counter
      defaultValue={100}
    />
  </div>
)
export default App
