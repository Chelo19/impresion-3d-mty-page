import './Gallery.css';
import galleryImg1 from '../../assets/gallery_img_1.jpg';
import galleryImg2 from '../../assets/gallery_img_2.jpg';
import galleryImg3 from '../../assets/gallery_img_3.jpg';
import galleryImg4 from '../../assets/gallery_img_4.jpg';
import galleryImg5 from '../../assets/gallery_img_5.jpg';
import galleryImg6 from '../../assets/gallery_img_6.jpg';

function Gallery(){
    return(
        <div className='gallery'>
            {/* <span className='gallery_title'>Nuestro trabajo</span> */}
            <div className='gallery_container'>
                <div className='gallery_item'>
                    <img src={galleryImg1}/>
                </div>
                <div className='gallery_item'>
                    <img src={galleryImg2}/>
                </div>
                <div className='gallery_item'>
                    <img src={galleryImg3}/>
                </div>
                <div className='gallery_item'>
                    <img src={galleryImg4}/>
                </div>
                <div className='gallery_item'>
                    <img src={galleryImg5}/>
                </div>
                <div className='gallery_item'>
                    <img src={galleryImg6}/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;