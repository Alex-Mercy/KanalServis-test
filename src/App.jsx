import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TablePage from './pages/TablePage/TablePage.jsx';


function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<TablePage/>} />
            </Routes>
        </div>

    )
}

export default App