import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'

const CafeteriaContext = createContext()

const CafeteriaProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB)

    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    return (
        <CafeteriaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >{children}</CafeteriaContext.Provider>
    )
}

export {
    CafeteriaProvider
}

export default CafeteriaContext
