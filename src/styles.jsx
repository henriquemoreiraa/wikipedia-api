import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 100vh;
`; 

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        margin-top: 15px;

        input {
            outline: none;
            border: 1px solid black;
            border-radius: 5px 0px 0px 5px;
            border-right: none;
            padding: 5px;
            width: 24rem;
            height: 30px;
            font-size: 18px;
            
        }

        button {
            outline: none;
            border: 1px solid black;
            border-left: none;
            border-radius: 0px 5px 5px 0px;
            padding: 5px;
            height: 42px;
            cursor: pointer;
            width: 50px;
        }
    }

    img {
        width: 200px;
    }
`;

export const Results = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 17px;
    margin-top: 40px;
    padding-bottom: 52px;
    justify-items: center;

    div {
        width: 80%;
        box-shadow: 0px 0px 29px 5px rgba(0,0,0,0.1);
        padding: 15px;
        border: 1px solid black;
        border-radius: 15px;    

        a {
            color: black;
            text-decoration: none;

        }
    }
    
`;
