import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 90vh;
`; 

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    div {
        display: flex;
        align-items: center;
        margin-top: 15px;

        input {
            outline: none;
            border: 1px solid gray;
            border-radius: 5px 0px 0px 5px;
            border-right: none;
            padding: 5px;
            width: 24rem;
            height: 30px;
            font-size: 18px;
            
        }

        button {
            outline: none;
            border: 1px solid gray;
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
        width: 85%;
        box-shadow: 0px 0px 29px 5px rgba(0,0,0,0.1);
        border: 1px solid gray;
        border-radius: 15px;    
        overflow: hidden;
        

        a {
            color: black;
            text-decoration: none;

        }

        h1 {
            margin-top: 0;
            padding-left: 15px;
            background-color: rgba(205, 205, 205, 0.715);
            margin-bottom: 0;
            padding: 5px 0 5px 10px;
            font-size: 28px;
        }

        p { 
            margin-top: 5px;
            padding: 15px;
            font-size: 18px;
            line-height: 1.4em;
        }
    }
    
`;
