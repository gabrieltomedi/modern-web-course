import React from "react";
import Main from "../template/Main"

export default (props) => (
  <Main icon="fa fa-home" title="Início"
    subtitle="Segundo projeto do capítulo de React">
    <div className="display-4">Bem vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para demonstrar a construção de um Crud desenvolvido em React
    </p>
  </Main>
);