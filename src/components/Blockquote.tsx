import { MediaScreen } from '@/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.blockquote`
    border-left: 5px solid rgb(109, 180, 255);
    background: rgb(50, 59, 87);
    color: rgb(255, 255, 255);
    margin: 0px -15px 15px;
    padding: 5px 15px;
    border-radius: 0px 8px 8px 0px;
    font-size: 95%;

    ${MediaScreen.LG} {
        padding: 5px 20px;
        margin-left: -25px;
        margin-right: -25px;
    }
`;

export function Blockquote(props: PropsWithChildren<{}>) {
    const { children } = props;

    return <Wrapper>{children}</Wrapper>;
}
