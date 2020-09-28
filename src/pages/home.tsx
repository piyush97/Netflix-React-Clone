import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
import { OptInForm } from '../components';

interface Props extends RouteComponentProps {
    path?: string;
}
const Home: React.FC<Props> = () => {
    return (
        <>
            <HeaderContainer>
                <OptInForm>
                    <OptInForm.Input placeholder="Email Address" />
                    <OptInForm.Button>Try it now</OptInForm.Button>
                    <OptInForm.Text>
                        Ready to watch? Enter your email to create or restart your membership.
                    </OptInForm.Text>
                </OptInForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
export default Home;
