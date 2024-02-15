import styled from "styled-components";
 
export const Box = styled.div`
    // padding: 5% 2.5%;
    padding-bottom: 10px;
    background: #044d7e;
    bottom: 0;
    // width: 100%;
 
    // @media (max-width: 1000px) {
    //     // padding: 70px 30px;
    // }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify_content: center;
    text-align: center;
    max-width: 95%;
    margin: 0 auto;
    // background: red; 
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    // margin-left: 20px;
    
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(280px, 1fr)
    );
    gap: 150px;
 
    // @media (max-width: 1000px) {
    //     grid-template-columns: repeat(
    //         auto-fill,
    //         minmax(200px, 1fr)
    //     );
    // }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    // margin-bottom: 40px;
    font-weight: bold;
`;

export const Body = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 40px;
    // font-weight: bold;
`;