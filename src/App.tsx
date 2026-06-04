import { useState } from "react"


export function App() { // componente base, (APP) porta de entrada da aplicação

  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);


  return (

    <div>
      <p style={{ display: 'none'}}>Teste</p> 
      {!hide && <p>Teste 1 </p>}
      {hide && <p>Teste 2 </p>}

      {hide
        ? <p>txt 1</p>
        : <p>txt 2</p>
      }
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button onClick={() => setHide(!hide)}>
        Toggle
      </button>
    </div>
  )
}

