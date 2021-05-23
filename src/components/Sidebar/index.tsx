import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { useRoute } from '../../contexts/RouteContext';

import styles from './styles.module.scss';



export default function Sidebar() {
  const [linha, setLinha] = useState('');
  const [dir, setDir] = useState('');
  const [directions, setDirections] = useState<string[]>(['', '']);

  const selectRef = useRef<HTMLSelectElement>(null);

  const { handleSetCourse } = useRoute();
  
  function selectedLine(event: ChangeEvent<HTMLSelectElement>) {
    if(!selectRef.current){
      return;
    } else {
      selectRef.current.selectedIndex = 0;
      setLinha(event.target.value);
    }
  }

  function selectedDirection( event: ChangeEvent<HTMLSelectElement>) {
    setDir(event.target.value);
  }

  useEffect(() => {
    switch(linha) {
      case '112': {
        setDirections(['Gávea', 'Rodoviária']);
        break;
      }
      case '133': {
        setDirections(['Rodoviária', 'Largo do Machado']);
        break;
      }
      case '201': {
        setDirections(['Castelo', 'Santa Alexandrina']);
        break;
      }
      case '202': {
        setDirections(['Aeroporto', 'Rio Comprido']);
        break;
      }
      case '415': {
        setDirections(['Usina', 'Leblon']);
        break;
      }
      case '426': {
        setDirections(['Jardim de Aláh', 'Usina']);
        break;
      }
      case '539': {
        setDirections(['Rocinha', 'Leme']);
        break;
      }
      case '117': {
        setDirections(['Cosme Velho', 'Central']);
        break;
      }
    }
  }, [linha]);

  useEffect(() => {
    setDir(directions[0]);
  }, [directions]);


  return (
    <aside className={styles.sidebarContainer}>
      <main>
        <div className={styles.selectLine}>
          <h2>Selecione a linha</h2>
          <select onChange={selectedLine} name="linha" id="linha">
            <option disabled selected>Escolha uma linha</option>
            <option value="112">112</option>
            <option value="133">133</option>
            <option value="201">201</option>
            <option value="202">202</option>
            <option value="415">415</option>
            <option value="426">426</option>
            <option value="539">539</option>
            <option value="117">TR7</option>
          </select>
        </div>
        <div className={styles.selectDirection}>
          <h2>Selecione o sentido da linha</h2>
          <select ref={selectRef} name="" onChange={selectedDirection} id="">
            <option value={directions[0]}>{directions[0]}</option>
            <option value={directions[1]}>{directions[1]}</option>
          </select>
        </div>
        <button onClick={() => handleSetCourse({lineC: linha, directionC: dir})}>Verificar Rota</button>
        <textarea 
          name="" 
          rows={15} 
          id=""
        >
        </textarea>
      </main>
    </aside>
  );
}
