import { useState } from "react"


export function App() { // componente base, (APP) porta de entrada da aplicação

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Felipe');
  return (

    <div>
      <p>{name} clicou:  
        <button onClick={() => setCount(count + 1)}>
          {count}
        </button>
        <button onClick={() => setName("Iori")}>
          Mude o nome</button>

      </p>
      
    </div>
  )
}

