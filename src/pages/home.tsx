import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

interface Props extends RouteComponentProps {
    path?: string;
}
const Home: React.FC<Props> = () => {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
export default Home;
