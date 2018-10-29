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

export const HeaderPage = styled.header`    
    margin-bottom: 30px;
    
    & > div > div:first-child{
        align-items: center;
        max-width: 115px;
    }
`

export const ListProcess = styled.header`
    
    & > div > div:first-child{
        align-items: center;
        max-width: 115px;
    }

    & > div > div {
        flex-grow; 1;
    }
`
