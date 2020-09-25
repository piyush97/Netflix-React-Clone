import React from 'react';
import jumboData from './fixtures/jumbo.json';
import Jumbotron, { JumbotronContainer } from './components/jumbotron';

interface Props {
    direction?: string;
    children?: object;
}

const App: React.FC<Props> = () => {
    return (
        <>
            <JumbotronContainer>
                {jumboData.map((item) => (
                    <Jumbotron direction={item.direction} key={item.id}>
                        <p>hello</p>
                    </Jumbotron>
                ))}
            </JumbotronContainer>
        </>
    );
};
export default App;
