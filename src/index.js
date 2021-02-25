import 'regenerator-runtime/runtime';
import App from './components/App';
import Comics from './comics/Comics';


(async function() {
   await App.render();
   Comics.eventListener();
})();

