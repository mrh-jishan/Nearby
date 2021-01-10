import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { CoordsProvider } from './CoordsProvider';
import { theme } from './core/theme';
import Routes from './routes/index';

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <CoordsProvider>
                <Routes />
            </CoordsProvider>
        </PaperProvider>
    )
}

export default App;