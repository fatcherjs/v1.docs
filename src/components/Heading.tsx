import { PropsWithChildren, useMemo } from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
    display: inline-block;
    position: absolute;
    padding: 10px 0;
    opacity: 0;
    transition: opacity 0.2s;
    width: 32px;
    top: -10px;
    right: -16px;
    color: #81edff;

    @media (min-width: 768px) {
        right: initial;
        text-align: center;
        width: 30px;
        left: -30px;
    }
`;

const HeadingWrapper = styled.h1`
    position: relative;
    margin-top: 0px;
    margin-bottom: 16px;
    color: rgb(255, 255, 255);
    word-break: break-word;
    font-size: 18px;

    :hover ${Anchor} {
        opacity: 1;
    }
`;

const HeadingOne = styled(HeadingWrapper)`
    font-size: 48px;
    display: inline-block;
    text-shadow: rgb(0 0 0) -2px 2px 0px, rgb(0 0 0) -4px 3px 0px;
    color: rgb(255, 255, 255);
    padding: 10px 0px;
    transition: color 0.3s ease 0s;

    @media (min-width: 768px) {
        font-size: 64px;
    }

    :before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 40px;
        margin-left: -25px;
        background: linear-gradient(45deg, rgb(0, 88, 255), rgb(223, 114, 161), rgb(247, 255, 187));
        z-index: -1;
        transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        border-radius: 3px;
    }
`;

const HeadingTwo = styled(HeadingWrapper.withComponent('h2'))`
    font-size: 28px;
    margin-top: 60px;
    margin-bottom: 24px;
    padding-right: 30px;

    @media (min-width: 576px) {
        font-size: 32px;
    }

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const HeadingThree = styled(HeadingWrapper.withComponent('h3'))`
    font-size: 24px;
    margin-top: 35px;

    @media (min-width: 768px) {
        font-size: 28px;
    }
`;

const HeadingFour = HeadingWrapper.withComponent('h4');
const HeadingFive = HeadingWrapper.withComponent('h5');
const HeadingSix = HeadingWrapper.withComponent('h6');

export interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    anchor?: boolean;
}

const map = new Map(
    Object.entries({
        1: HeadingOne,
        2: HeadingTwo,
        3: HeadingThree,
        4: HeadingFour,
        5: HeadingFive,
        6: HeadingSix,
    })
);

export function Heading(props: PropsWithChildren<HeadingProps>) {
    const { level, anchor = true, children } = props;

    const Wrapper = map.get(`${level}`)!;

    const hash = useMemo(() => {
        return decodeURIComponent([children].filter(child => typeof child === 'string').join(' '));
    }, []);

    return (
        <Wrapper>
            {anchor && (
                <Anchor id={hash} href={`#${hash}`}>
                    #
                </Anchor>
            )}
            {children}
        </Wrapper>
    );
}
