import { useState } from "react"

export function App() { // componente base, (APP) porta de entrada da aplicação

  const [list, setList] = useState([
    {id: '1', label: 'Fazer café',},
    {id: '2', label: 'Fazer café',},
    {id: '3', label: 'Fazer almoço',},
    {id: '4', label: 'Fazer janta',},
  ]);

  return (
    <div>

      <input type="text" />
      <button>Add</button>
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </div>
  )

}

