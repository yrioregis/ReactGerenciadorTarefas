import { React } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { Card } from 'primereact/card';
        
        
import './App.css'

function App() {

  return (
    <>
    <section className="container">

      <h1>LISTA DE TAREFAS</h1>
      <div className="row2 mb-3 mx-2">
          <div className="contagem-tarefas">
              Total de Tarefas: 0
          </div>
          <div className="tarefas-concluidas">
              Total de Tarefas Concluídas: 0
          </div>
      </div>


      <div className="d-flex mb-3 mx-2 gap-4">
          <InputText type="text" className="p-inputtext" placeholder="Insira uma tarefa" />
          <Button label="Clique-me" icon="pi pi-check" />
      </div> 

      <div className="lista mx-2"></div>

    </section>

    <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    </>
  )
}

export default App
