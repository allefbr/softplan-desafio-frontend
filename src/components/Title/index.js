import styled from 'styled-components'
import { colors, fonts } from '../../config/theme'

const TitleDefault = styled.h2`
    font-family: 'Montserrat';
    font-wegiht: normal;
    line-height: 1;
    transition: all .2s ease-in-out;
`

export const HeadTitle = styled(TitleDefault)`
    font-size: ${fonts.xBig};
    color: ${colors.primary};
`

export const Title = styled(TitleDefault)`
    font-size: ${fonts.big};
    
    a {
        text-decoration: none;
        color: ${colors.black};

        &:hover {
            color: ${colors.primary}
        }
    }
`