import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { CoordsProvider } from './CoordsProvider';
import { theme } from './core/theme';
import Routes from './routes/index';
import configureStore from './store';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <CoordsProvider>
                    <Routes />
                </CoordsProvider>
            </PaperProvider>
        </Provider>
    )
}

export default App;