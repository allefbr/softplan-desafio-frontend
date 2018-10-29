import styled from 'styled-components'

export const MessageIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30;
    text-align: center;
    fill: #333;
    color: #333;

    max-width: 450px;
    margin: 0 auto;

    svg {
        width: 50px;
    }

    a {
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;        
        transition: all .2s ease-in-out;
        background-color: #fff;
        border: 1px solid #c4c4c4;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
        color: #757575;
        padding: 10px 30px;
        background-color: transparent;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        margin-top: 15px;

        &:hover {            
            background-color: #f1f1f1;
        }
    }

`

export const MessageIconTitle = styled.h2`
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
`