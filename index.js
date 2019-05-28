/**
 * @format
 */
import Component from 'react';
import {Image, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
class Bananas extends Component {
    render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width: 193, height: 110}}/>
      );
    }
  }
    AppRegistry.registerComponent(appName, () => Bananas);
