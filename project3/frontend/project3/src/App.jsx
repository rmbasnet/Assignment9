import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './components/HomePage';
import ArtForm from './components/ArtForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/art/:id" element={<HomePage />} />
        <Route path="/art/:id/edit" element={<HomePage />} />
        <Route path="/note/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;