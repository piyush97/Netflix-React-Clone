import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';

interface Props extends RouteComponentProps {
    path?: string;
}
const Home: React.FC<Props> = () => {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
export default Home;
