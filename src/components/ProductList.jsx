import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ProductList() {
  const [state, setState] = useState({ products: [], loading: true, error: null })

  useEffect(() => {
    const fetchProducts = async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      try {
        const { data } = await axios.get('https://dummyjson.com/products', { params: { limit: 10 } })
        setState((prev) => ({ ...prev, products: data.products }))
      } catch (err) {
        console.error(err)
        setState((prev) => ({ ...prev, error: err }))
      } finally {
        setState((prev) => ({ ...prev, loading: false }))
      }
    }
    fetchProducts()
  }, [])

  if(state.loading) return <p>Content is loading...</p>
  if(state.error) return <p>Oops! An error occurred.</p>

  return (
    <ul>
      {state.products?.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price} €
          </li>
        ))}
    </ul>
  )
}