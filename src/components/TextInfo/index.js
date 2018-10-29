import React from 'react'
import { InfoWrapper, InfoTitle, InfoDesc } from './style'

const TextInfo = ({ title, desc, list }) => (
    <InfoWrapper>
        <InfoTitle>{ title }</InfoTitle>
        {!list && <InfoDesc>{ desc }</InfoDesc>}        
        {  
            list && desc !== undefined && 
            <InfoDesc arr >{ desc.map( (item, index) => <span key={index} >{ item }</span>) }</InfoDesc>
        }
    </InfoWrapper>
)

export default TextInfo