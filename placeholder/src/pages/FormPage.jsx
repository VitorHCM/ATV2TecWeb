import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function FormPage() {
  const { addItem } = useAppContext();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addItem({ name });
    setName('');
  };

  return (
    <h1>
      <h2>Adicionar Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </h1>
  );
}

export default FormPage;
