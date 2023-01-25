import "./_Slider.scss";
import { images } from "./images-links";
import SingleSlide from "./SingleSlide";

const Slider = () => {
  console.log(images);
  return (
    <div className="slider-container">
      <div className="slider-items">
        {images ? (
          images.map((x) => {
            return <SingleSlide image={x} key={x.id} />;
          })
        ) : (
          <h2>No images to show</h2>
        )}
      </div>
    </div>
  );
};

export default Slider;
