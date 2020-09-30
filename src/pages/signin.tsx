import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

interface Props extends RouteComponentProps {
    path?: string;
}
const Signin: React.FC<Props> = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = password === '' || emailAddress === '';

    const handleSignIn = (event: any) => {
        event.preventDefault();
        setError('hello');
    };
    return (
        <>
            <HeaderContainer>Sign In</HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        placeholder="email"
                        value={emailAddress}
                        onChange={(target: any) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        value={password}
                        onChange={(target: any) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInValid} type="submit">
                        Submit
                    </Form.Submit>
                </Form.Base>
            </Form>
            <FooterContainer></FooterContainer>
        </>
    );
};
export default Signin;
