import * as React from 'react';
import Counter from './counter/CounterComponent'
import Tasks from './tasks/'

const App: React.ReactElement<{}> = (
  <div className='app-container'>
    <Counter
      defaultValue={100}
    />
    <hr />
    <Tasks />
  </div>
)
export default App
