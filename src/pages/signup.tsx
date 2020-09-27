import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    path?: string;
}
const Signup: React.FC<Props> = () => {
    return <>Sign Up</>;
};
export default Signup;
