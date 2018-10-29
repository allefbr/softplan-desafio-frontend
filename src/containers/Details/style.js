import styled from 'styled-components'

export const WrapperPage = styled.section`    
    width: 100%;    
    min-height: 100vh;
    margin: 0 auto;
    padding: 15px;

    & form {
        margin-right: 20px;
    }
`

export const WrapperGrid = styled.section`    
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;

    > div:last-child {
        position: sticky;
        top: 5px;
    }
`

export const ListProcess = styled.section`
    & > div > div:first-child{
        align-items: center;
        max-width: 115px;
    }

    & > div > div {
        flex-grow; 1;
    }
`
