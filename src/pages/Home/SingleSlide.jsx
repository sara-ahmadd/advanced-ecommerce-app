import "./_Slider.scss";

const SingleSlide = ({ image, currentClass }) => {
  return (
    <div className={currentClass}>
      <img src={image.link} alt={image.title} />
    </div>
  );
};

export default SingleSlide;
