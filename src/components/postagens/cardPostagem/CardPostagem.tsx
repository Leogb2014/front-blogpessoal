import React from 'react'
import Postagem from '../../../models/Postagem'
import { Link } from 'react-router-dom';

interface CardPostagemProps{
    postagem: Postagem
}

function CardPostagem({postagem} : CardPostagemProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
             <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                 <img className='w-14 rounded-full' src={postagem.usuario?.foto} alt="" />
                 <h2  className='text-lg font-bold text-center uppercase '>{postagem.usuario?.nome}</h2>
             </div>
             
             <div className='p-4'>
                 <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                  <p>{postagem.texto}</p>
                  <p>Tema: {postagem.tema?.descricao}</p>
                 <p>Data: {new Intl.DateTimeFormat(undefined, {
                dateStyle: 'full',
                timeStyle: 'medium',
            }).format(new Date(postagem.data))}</p>
        </div>
        </div>
        <div className='flex'>
            <Link to={`/editarPostagem/${postagem.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>
            <Link to={`/deletarPostagem/${postagem.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
            </Link>
            
        </div>
        </div>
       
  )
}

export default CardPostagem