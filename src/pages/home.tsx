import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
import { Feature, OptInForm } from '../components';

interface Props extends RouteComponentProps {
    path?: string;
}
const Home: React.FC<Props> = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, Tv programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                </Feature>
                <OptInForm>
                    <OptInForm.Text>
                        Ready to watch? Enter your email to create or restart your membership.
                    </OptInForm.Text>
                    {/* Jugaad workaround */}
                    <div style={{ width: '100vw' }} />
                    <OptInForm.Input placeholder="Email Address" />
                    <OptInForm.Button>Try it now</OptInForm.Button>
                </OptInForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};
export default Home;
