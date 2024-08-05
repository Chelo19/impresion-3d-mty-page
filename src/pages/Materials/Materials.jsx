import { Link, useNavigate } from 'react-router-dom';
import './Materials.css';
import { useEffect } from 'react';
import materials_before_pla from '../../assets/materials_before_pla.jpg';
import materials_after_pla from '../../assets/materials_after_pla.png';
import materials_before_abs from '../../assets/materials_before_abs.jpg';
import materials_after_abs from '../../assets/materials_after_abs.png';
import materials_before_petg from '../../assets/materials_before_petg.jpg';
import materials_after_petg from '../../assets/materials_after_petg.png';
import materials_before_petgcf from '../../assets/materials_before_petgcf.jpg';
import materials_after_petgcf from '../../assets/materials_after_petgcf.png';
import materials_before_pa6cf from '../../assets/materials_before_pa6cf.jpg';
import materials_before_tpu from '../../assets/materials_before_tpu.jpg';
import materials_after_tpu from '../../assets/materials_after_tpu.png';

function Materials(){
    const navigate = useNavigate();

    return(
        <div className="materials">
            <div className='materials_page_display'>
                <Link to={`/materiales/pla`} alt="PLA" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_pla} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>PLA</span>
                        <img src={materials_after_pla} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
                <Link to={`/materiales/abs`} alt="ABS" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_abs} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>ABS</span>
                        <img src={materials_after_abs} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
                <Link to={`/materiales/petg`} alt="PETG" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_petg} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>PETG</span>
                        <img src={materials_after_petg} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
                <Link to={`/materiales/petg-cf`} alt="PETG-CF" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_petgcf} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>PETG CF</span>
                        <img src={materials_after_petgcf} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
                <Link to={`/materiales/pa6-cf`} alt="PA6-CF" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_pa6cf} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>PA6 CF</span>
                        <img src={materials_after_petgcf} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
                <Link to={`/materiales/tpu`} alt="TPU" target="_blank">
                    <div class="materials_card">
                        <div class="materials_wrapper">
                            <img src={materials_before_tpu} class="materials_cover_image" />
                        </div>
                        <span class='materials_title'>TPU</span>
                        <img src={materials_after_tpu} class="materials_character" />
                        <a className='materials_see_more'>Ver más</a>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Materials;