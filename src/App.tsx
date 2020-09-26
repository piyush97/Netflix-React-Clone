import React from 'react';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

const App: React.FC = () => {
    return (
        <>
            <JumbotronContainer />
            <FooterContainer />
        </>
    );
};
export default App;
