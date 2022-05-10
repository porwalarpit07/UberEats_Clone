/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import home from './src/Screens/Home';

AppRegistry.registerComponent(appName, () => home);
