import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Todos from "./pages/Todos"
import TodoDetail from "./pages/TodoDetail"

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
