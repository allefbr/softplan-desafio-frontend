import React, { Component } from 'react'
import { Form, Field, FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from './textInput'
import TextArea from './textArea'
import { ButtonPrimarySmall, ButtonGraySmall } from '../Buttons'
import { isEmpty } from '../../utils'
import { Cadastrar } from '../../config/server'

class MyForm extends Component {
    render() { 
        const {
            values,            
            errors,
            dirty,
            isSubmitting,            
        } = this.props;        

        return (
            <Form>
                <Field type="text" name="assunto" label="Assunto" component={TextInput} />
                
                <FieldArray
                    name="interessados"
                    render={ helper => (
                        <div>
                            {values.interessados.length > 0 && (
                                <div className="list-interessados">
                                    <strong>Interessados</strong>
                                    <ul>
                                        { 
                                            values.interessados.map((interessado, index) => (
                                                <li key={index}>
                                                    <Field name={`interessados.${index}`} />
                                                    <button
                                                        type="button"
                                                        onClick={ () => helper.remove(index) }
                                                    >-</button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}

                            <div className="rowNovoInteressado">
                                <Field 
                                    type="text" 
                                    name="novoInteressado" 
                                    label="Novo interessado" 
                                    component={TextInput}                                    
                                />
                                <ButtonGraySmall type="button" onClick={(e) => {
                                    if (values.novoInteressado !== '') {
                                        helper.push(values.novoInteressado)
                                        values.novoInteressado = '';
                                    }
                                }
                                }>Adicionar</ButtonGraySmall>
                            </div>                            
                        </div>
                    )}
                />

                <Field name="descricao" label="Descrição" component={TextArea} />
                
                <ButtonPrimarySmall
                    type="submit"
                    className="btn btn-default"
                    disabled={ isSubmitting || !isEmpty(errors) || !dirty}
                >Salvar</ButtonPrimarySmall>
            </Form>
        )
    }
}

const formikEnhancer = withFormik({
    mapPropsToValues: () => ({ assunto: '', interessados: [], descricao: '', novoInteressado: '' }),

    validationSchema: Yup.object().shape({
        assunto: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('Campo obrigatorio!'),
        
        descricao: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('Campo obrigatorio!')
    }),

    handleSubmit: async (values, { props, setSubmitting, setErrors, setStatus, resetForm, onClose }) => {
        try {
            await Cadastrar(values)
                .then ((res) => {
                    props.bag.openMessageSuccess()
                    props.bag.closeMessageTimer()
                    resetForm()
                    setStatus({ success: true })
                })
                .catch(err => { 
                    console.log(err)
                    props.bag.closeMessageTimer()
                    props.bag.openMessageError()
                })

        } catch (error) {        
            setStatus({ success: false })
            setSubmitting(false)
            setErrors({ submit: error.message })
        }
    },

    displayName: 'BasicForm',
});

export default formikEnhancer(MyForm);