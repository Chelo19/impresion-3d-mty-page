import "./Gallery.css";

function Gallery({ imgArray }) {
  return (
    <div className="gallery">
      {imgArray.map((img, index) => {
        return (
          <div className="gallery_item" key={index}>
            <img src={img} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
