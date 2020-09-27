import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './pages/home';
import * as ROUTES from './constants/routes';
import { Browse, Signin, Signup } from './pages';

interface Props extends RouteComponentProps {
    path?: string;
}
const App: React.FC<Props> = () => {
    return (
        <Router>
            <Home path={ROUTES.HOME} />
            <Signin path={ROUTES.SIGN_IN} />
            <Browse path={ROUTES.BROWSE} />
            <Signup path={ROUTES.SIGN_UP} />
        </Router>
    );
};

export default App;
