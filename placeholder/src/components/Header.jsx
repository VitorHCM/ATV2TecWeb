import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import ListPage from '../pages/ListPage';

function Header() {
  return (
    <Router>
      <nav>
        <Link to="/">Adicionar Tarefas</Link> | <Link to="/lista">To do list</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/lista" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default Header;