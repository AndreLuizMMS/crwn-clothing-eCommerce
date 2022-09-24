import CategoryContainer from './category-container/CategoryConatiner';

const Directoy = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryContainer
          title={category.title}
          bgImg={category.imageUrl}
          key={category.id}
        />
      ))}
    </div>
  );
};

export default Directoy;
