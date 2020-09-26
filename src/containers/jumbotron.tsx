import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

interface Props {
    direction?: string;
    children?: object;
}

export const JumbotronContainer: React.FC<Props> = () => {
    return (
        <>
            <Jumbotron.Container>
                {jumboData.map((item) => (
                    <Jumbotron direction={item.direction} key={item.id}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>
        </>
    );
};
