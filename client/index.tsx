// Meteor & React
import { Meteor } from 'meteor/meteor';
import * as React  from 'react';
import { render } from 'react-dom'

// Client Configs: Routes
// import {renderRoutes} from '../imports/startup/client/index.js';

// Redux
// import { Provider } from 'react-redux';
// import Store from '../imports/ui/store/store.js';

// Material-UI
// import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRoot from './Root'

const Demo = (
  <div>Hello World</div>
)

Meteor.startup(()=> {
  // injectTapEventPlugin(); // Required for Material IconMenu (v.0.15.0)
  render(AppRoot(undefined,undefined,Demo), document.getElementById('root'));
});