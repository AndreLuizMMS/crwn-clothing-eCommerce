import { Link } from 'react-router-dom';
import ItemCard from '../routes/Shop/ItemCard/ItemCard';
import './Category-Preview.scss';

const CategoryPreview = ({ title, productsArr }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {productsArr.slice(0, 4).map(item => {
          return <ItemCard key={item.id} products={item} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
