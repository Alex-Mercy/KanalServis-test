import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TablePage from './pages/TablePage/TablePage.jsx';


function App() {
    return (
        <div>
            <TablePage/>
            {/* <Header /> */}
            {/* <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Galery />} />
                <Route path="/details/*" element={<PictureDetails />} />
            </Routes> */}
        </div>

    )
}

export default App