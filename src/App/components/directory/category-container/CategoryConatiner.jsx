import { Link } from 'react-router-dom';
import './CaterContainer.scss';

const CategoryContainer = ({ title, bgImg, route }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bgImg})`
        }}
      >
        <Link to={route}>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Comprar já</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryContainer;
