import React, { FC } from 'react';

import { GlobalStyle } from './components';

import Game from './pages/Game';

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Game />
        </>
    );
};

export default App;
