import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './core/theme';
import Routes from './routes/index';

const App = () => {
    return (
        // <Provider store={store}>
        <PaperProvider theme={theme}>
            <Routes />
        </PaperProvider>
        //   </Provider>
    )
}

export default App;