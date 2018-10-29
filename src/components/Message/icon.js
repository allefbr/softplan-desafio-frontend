import React from 'react'
import { Link } from 'react-router-dom';
import LinkBroken from '../Icones/LinkBroken'
import { MessageIcon, MessageIconTitle } from './style'

const Message = () => (
    <MessageIcon>
        <LinkBroken />
        <MessageIconTitle>Não encontramos processos que correspondam aos seus critérios de busca.</MessageIconTitle>
        <Link to="/">Ir para página inicial</Link>
    </MessageIcon>
)

export default Message 