import { useState, useEffect } from 'react';
import productItems from '../../database/database.json';

export const List = () => {
  const [products, setProducts] = useState(() => productItems);

  useEffect(() => {
    setProducts(
      productItems.map(product => ({
        ...product,
        isActive: false,
      }))
    );
  }, []);

  const handleClick = e =>
    setProducts(
      products.map(product =>
        e.target.id === product.title
          ? { ...product, isActive: !product.isActive }
          : product
      )
    );

  return (
    <div>
      {products.map(({ title, isActive }) => (
        <li
          style={{ fontWeight: isActive ? '900' : '400' }}
          onClick={handleClick}
          id={title}
          key={title}
        >
          {title}
        </li>
      ))}
    </div>
  );
};
