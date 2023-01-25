import "./_Slider.scss";

const SingleSlide = ({ image }) => {
  return (
    <div className="img">
      <img src={image.link} alt={image.title} />
    </div>
  );
};

export default SingleSlide;
