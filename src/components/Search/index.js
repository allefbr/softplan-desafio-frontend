import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { fetchProcess } from '../../reducers/search/action-creators'

import { SearchForm, InputWrapper, ButtonMagnify } from './style.js'
import Magnify from '../Icones/Magnify'

const Search = ({ props, handleSearhProcess }) => (
    <SearchForm onSubmit={handleSearhProcess()}>
        <InputWrapper>
            <input type="text" name="search" placeholder="Pesquise por um Informação do processo" />

            <ButtonMagnify>
              <Magnify />
            </ButtonMagnify>
        </InputWrapper>
    </SearchForm>
)

const mapDispatchToProps = (dispatch, props) => ({
  handleSearhProcess: () => async (e) => {
    e.preventDefault()
    let value = e.target.search.value;
    if (!value) return
    const redirect = `/buscar/${value}`;    
    await dispatch(fetchProcess(value))
    dispatch( push(redirect) )
  }
})

export default connect(null, mapDispatchToProps)(Search)