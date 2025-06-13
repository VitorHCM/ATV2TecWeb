import { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [items, setItems] = useState([]);
  const [concluidos, setConcluidos] = useState([]);

  // Carregar tarefas da API
  useEffect(() => {
    api.get('/items').then((res) => {
      const todas = res.data;
      setItems(todas.filter((item) => !item.concluido));
      setConcluidos(todas.filter((item) => item.concluido));
    });
  }, []);

  // Adicionar tarefa nova
  const addItem = async (item) => {
    const response = await api.post('/items', { ...item, concluido: false });
    setItems((prev) => [...prev, response.data]);
  };

  // Marcar como concluído
  const concluirItem = async (id) => {
    await api.patch(`/items/${id}`, { concluido: true });
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    setConcluidos((prev) => [...prev, { ...item, concluido: true }]);
  };

  // Desfazer conclusão
  const desfazerItem = async (id) => {
    await api.patch(`/items/${id}`, { concluido: false });
    const item = concluidos.find((i) => i.id === id);
    setConcluidos((prev) => prev.filter((i) => i.id !== id));
    setItems((prev) => [...prev, { ...item, concluido: false }]);
  };

  return (
    <AppContext.Provider value={{ items, concluidos, addItem, concluirItem, desfazerItem }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
