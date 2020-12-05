
import ReactOnRails from 'react-on-rails';
import App from "../components/App"
import {appStore} from "../redux/reducer"
ReactOnRails.registerStore({
  appStore
});


ReactOnRails.register({
  App
});