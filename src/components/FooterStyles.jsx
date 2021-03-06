import styled from "styled-components";

export const Box = styled.div`
    padding: 80px 60px;
    background: black;
    bottom: 0;
    width: 100%;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
    @media screen and (max-width: 1347px) {
        padding: 60px 0px;
    }
    @media screen and (max-width: 1186px) {
        padding: 60px 0px;
    }
    @media screen and (max-width: 990px) {
        padding: 60px 0px;
        display: flex;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    // background: red;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 40px;

    img{
        @media(max-width: 960px){
            display: none;
        }
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #5ccdff;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;