import React from 'react';

import { Footer } from '../components';

interface Props {
    direction?: string;
    children?: object;
}

export const FooterContainer: React.FC<Props> = () => {
    return (
        <>
            <Footer>
                <Footer.Title>Questions? Contact us.</Footer.Title>
            </Footer>
        </>
    );
};
