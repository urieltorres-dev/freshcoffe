import Categoria from './Categoria'
import { categorias } from '../data/categorias'

export default function Sidebar() {
    return (
        <asied className="md:w-72">
            <div className="p-4">
                <img
                    className="w-40"
                    src="img/logo.svg" 
                    alt="Logotipo" 
                />
            </div>

            <div className='mt-10'>
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className='my-5 px-5'>
                <button
                    type='button'
                    className='text-center bg-red-500 w-full hover:bg-red-800 p-3 font-bold text-white truncate'
                >
                    Cancelar orden
                </button>

            </div>

        </asied>
    )
}
