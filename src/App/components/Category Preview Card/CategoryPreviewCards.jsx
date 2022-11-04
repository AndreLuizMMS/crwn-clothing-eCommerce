import { Link } from 'react-router-dom';

import ItemCard from '../routes/Shop/ItemCard/ItemCard';
import './Category-Preview-Cards.scss';

const CategoryPreviewCards = ({ title, productsArr }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()} -&gt; </span>
        </Link>
      </h2>
      <div className="preview">
        {productsArr.slice(0, 4).map(item => {
          return <ItemCard key={item.id} products={item} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPreviewCards;
