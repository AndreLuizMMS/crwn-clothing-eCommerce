import './CaterContainer.scss';

const CategoryContainer = ({ title, bgImg }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bgImg})`
        }}
      >
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Comprar já</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
