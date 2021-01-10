import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './core/theme';
import Routes from './routes/index';

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <Routes />
        </PaperProvider>
    )
}

export default App;