import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { times } from './utils/EntradaTimes'
import Rodape from './componentes/rodape';

function App() {

  // declaracaoVariavel [variavelDeLeitura, variavelDeAlteracao] = useState(tipoVariavel) --> '', [], (), any
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) // ele espalha os colaboradores antigos e adiciona o novo colaborador
  }


  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {
        times != null && times.map(time => 
          <Time 
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
          )
      }

    <Rodape />
    </div>
  );
}

export default App;
