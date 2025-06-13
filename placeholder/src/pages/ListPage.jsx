import { useAppContext } from '../context/AppContext';

function ListPage() {
  const { items, concluidos, concluirItem, desfazerItem } = useAppContext();

  return (
    <div>
      <h2>Tarefas Pendentes</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            {item.name}
            <button style={{ marginLeft: '10px' }} onClick={() => concluirItem(item.id)}>
              Concluir
            </button>
          </li>
        ))}
      </ul>

      <h2>Tarefas Concluídas</h2>
      <ul>
        {concluidos.map((item) => (
          <li
            key={item.id}
            style={{
              color: 'gray',
              opacity: 0.6,
              marginBottom: '8px',
            }}
          >
            {item.name}
            <button style={{ marginLeft: '10px' }} onClick={() => desfazerItem(item.id)}>
              Desfazer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
