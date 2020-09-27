import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    path?: string;
}
const Signin: React.FC<Props> = () => {
    return <>Sign In</>;
};
export default Signin;
