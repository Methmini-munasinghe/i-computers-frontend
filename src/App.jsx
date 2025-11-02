import './App.css'
import { ProductCard } from './components/productCard'

function App() {


  return (
    <>
    <h1>hello</h1>
    <ProductCard name = "Laptop" price = {1000} description = "A high performance laptop" />
    <ProductCard name = "Smartphone" price = {700} description = "A latest model smartphone" />
    <ProductCard name = "Tablet" price = {500} description = "A lightweight tablet" />

    </>
  )
}

export default App
