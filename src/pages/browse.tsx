import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    path?: string;
}
const Browse: React.FC<Props> = () => {
    return <>Browse</>;
};
export default Browse;
