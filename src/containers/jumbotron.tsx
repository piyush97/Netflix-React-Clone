import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron, {
    JumbotronContainer,
    JumbotronImage,
    JumbotronPane,
    JumbotronSubtitle,
    JumbotronTitle,
} from '../components/jumbotron';

interface Props {
    direction?: string;
    children?: object;
}

const jumbotron: React.FC<Props> = () => {
    return (
        <>
            <JumbotronContainer>
                {jumboData.map((item) => (
                    <Jumbotron direction={item.direction} key={item.id}>
                        <JumbotronPane>
                            <JumbotronTitle>{item.title}</JumbotronTitle>
                            <JumbotronSubtitle>{item.subTitle}</JumbotronSubtitle>
                        </JumbotronPane>
                        <JumbotronPane>
                            <JumbotronImage src={item.image} alt={item.alt} />
                        </JumbotronPane>
                    </Jumbotron>
                ))}
            </JumbotronContainer>
        </>
    );
};
export default jumbotron;
