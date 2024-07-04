import React, { useContext, useEffect, useState } from 'react'
import CardPostagem from '../cardPostagem/CardPostagem'
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';


function ListaPostagens() {

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
          await buscar('/postagens', setPostagens, {
            headers: { Authorization: token },
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          }
        }
      }
    
      useEffect(() => {
        if (token === '') {
          toastAlerta('Você precisa estar logado', 'info')
          navigate('/login');
        }
      }, [token]);
    
      useEffect(() => {
        buscarPostagens();
      }, [postagens.length]);
      



  return (
    <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {postagens.map(postagem => (
            <CardPostagem key={postagem.id} postagem={postagem}/>

        ))}
        
       


   </div>
  )
}

export default ListaPostagens