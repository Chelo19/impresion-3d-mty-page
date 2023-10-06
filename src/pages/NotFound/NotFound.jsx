import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';
import { useEffect } from 'react';

function NotFound(){
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    return(
        <div className="not_found">
            <span className='not_found_title'>404</span>
            <span className='not_found_description'>No se encontró el sitio que buscas</span>
            <span className='not_found_progress'>Redireccionando...</span>
        </div>
    );
}

export default NotFound;