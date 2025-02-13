import "./ApplicationsSection.css";

import galleryImg1 from "../../../../assets/gallery_img_1.jpg";
import galleryImg2 from "../../../../assets/gallery_img_2.jpg";
import galleryImg3 from "../../../../assets/gallery_img_3.jpg";

export default function ApplicationsSection() {
  return (
    <div className="applications-section">
      <div className="applications-section-item">
        <span className="applications-section-item-title">Electrónica</span>
        <div className="applications-section-item-img">
          <img src={galleryImg1} />
        </div>
      </div>
      <div className="applications-section-item">
        <span className="applications-section-item-title">Fixtures</span>
        <div className="applications-section-item-img">
          <img src={galleryImg2} />
        </div>
      </div>
      <div className="applications-section-item">
        <span className="applications-section-item-title">Carcasas</span>
        <div className="applications-section-item-img">
          <img src={galleryImg3} />
        </div>
      </div>
    </div>
  );
}
