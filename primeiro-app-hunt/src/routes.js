import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const MainNavigator = createStackNavigator({
    Main: {
        screen: Main
    },
    Product
});

const App = createAppContainer(MainNavigator);

export default App;