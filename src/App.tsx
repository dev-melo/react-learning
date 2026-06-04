import { useState } from "react";

const Tests = () => { // Component Funcional React - a Primeira letra de um Componente precisa ser Maiuscula!!!
  return (
    <div>
      Isso é um componente react criado por mim.
    </div>
  )
}
const tests = () => { // Função JS que retorna html react
  return (
    <div>
      Isso é uma Função que retona html react.
    </div>
  )
}

export function App() {

  return (
    <div>
    Olá
    <Tests></Tests>
    <p>---</p>
    {tests()} 
    </div>
  )
}


const teste = () => { // Função JS
  return 1 + 1;
}

const useTeste = () => { // Função JS
  return 1 + 1;
}
const useTest = () => { // React hook 
  const [value] =  useState( 1 + 1 )
  return value;
}

