import styled from "styled-components";
 
export const Box = styled.div`
    padding-bottom: 10px;
    background: #044d7e;
    position: relative;
    bottom: 0px;
    height: 100%;
    width: 100vw;
    margin-top: auto;
 
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-left: 20px;
    // background: red; 
    
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    
`;

export const Facebox = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 20px;
    
`;

export const FaceboxManager = styled.div`
display: flex;
flex-direction: row;
align-items: left;
gap: 20px;

`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(280px, 1fr)
    );
    gap: 20px;
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
    font-weight: bold;
`;

export const Body = styled.p`
    font-size: 18px;
    color: #fff;
    // margin-bottom: 40px;
`;