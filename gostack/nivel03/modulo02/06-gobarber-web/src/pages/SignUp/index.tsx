import React, {useCallback,useRef} from 'react';
import {FiArrowLeft,FiLogIn,FiMail,FiUser,FiLock} from 'react-icons/fi';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErros';

import {Container,Content,Background} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data:object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6,'No mínimo 6 dígitos'),
      });

      await schema.validate(data,{abortEarly:false});
    } catch(err) {
      const errors = getValidationErros(err);
      formRef.current?.setErrors(errors);
    }
  },[]);
  return (<>
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber"/>
        <Form ref={formRef} initialData={{name:'Diego'}} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  </>);
};

export default SignUp;