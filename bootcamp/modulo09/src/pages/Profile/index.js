import React from 'react';
import {useSelector} from 'react-redux';
import {Form,Input} from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state=>state.user.profile); // PEGA DO REDUX
  function handleSubmit(data){

  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input type="password" name="cofirmPassword" placeholder="Confirme sua senha" />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
