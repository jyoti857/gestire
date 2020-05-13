/**
 * @format
 */


// import * as React from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import AppRouter from './src/routes';

AppRegistry.registerComponent(appName, () => AppRouter);
