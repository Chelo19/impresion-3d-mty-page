import './WhoWeAre.css';
import cerro from '../../assets/cerro_silla.jpg';

function WhoWeAre(){
    return(
        <div className='who_we_are'>
            <div className='who_we_are_container'>
                <div className='who_we_are_presentation'>
                    <span className='who_we_are_title'>
                        ¿Quiénes somos?
                    </span>
                    <span className='who_we_are_text'>
                        En Impresión 3D Monterrey, estamos apasionados por la tecnología de impresión 3D y estamos comprometidos en brindar soluciones innovadoras a estudiantes, creativos y entusiastas de Monterrey y sus alrededores. Somos un emprendimiento local que se enorgullece de ofrecer impresiones 3D de alta calidad a precios accesibles.
                    </span>
                    <span className='who_we_are_text'>
                        Nuestra misión es impulsar la creatividad y el aprendizaje a través de la tecnología de impresión 3D. Creemos en hacer que la impresión 3D sea accesible para todos, especialmente para estudiantes que buscan llevar sus proyectos al siguiente nivel.
                    </span>
                </div>
                <div className='who_we_are_img'>
                    <img src={cerro}/>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;