import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNews } from '../helper/NewsContextAPI';

const Detail = () => {
  const location = useLocation();
  const { id } = useParams();
  const { news, loading } = useNews();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state?.productsData) {
      setProduct(location.state.productsData);
    } else if (news.length > 0) {
      let foundProduct = null;
      for (const cart of news) {
        const found = cart.products.find((p) => p.id === Number(id));
        if (found) {
          foundProduct = found;
          break;
        }
      }
      setProduct(foundProduct);
    }
  }, [id, news, location.state]);

  if (loading && !product) {
    return (
      <div className="bg-[rgb(7,24,36)] w-full min-h-screen pt-20">
        <h1 className="text-white text-3xl container mx-auto text-center">
          Yuklanmoqda...
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[rgb(7,24,36)] w-full min-h-screen pt-20">
        <h1 className="text-red-500 text-3xl container mx-auto text-center">
          ❌ Maxsulot topilmadi
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[rgb(7,24,36)] w-full min-h-screen pt-20 pb-20">
      <div className="w-[1240px] container mx-auto p-6 bg-[rgb(14,45,66)] rounded-lg shadow-xl">
        <h1 className="text-white text-4xl font-bold mb-6 border-b border-[rgb(32,61,80)] pb-3">
          {product.title} Batafsil
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.thumbnail || '/placeholder.svg'}
              alt={product.title}
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="text-white">
            <p className="text-xl mb-3">
              <strong className="text-[rgb(0,116,184)]">Brand:</strong>{' '}
              {product.brand}
            </p>
            <p className="text-xl mb-3">
              <strong className="text-[rgb(0,116,184)]">Narxi:</strong> $
              {product.price}
            </p>
            <p className="text-xl mb-3">
              <strong className="text-[rgb(0,116,184)]">Kategoriyasi:</strong>{' '}
              {product.category}
            </p>
            <p className="text-xl mb-3">
              <strong className="text-[rgb(0,116,184)]">Reyting:</strong>{' '}
              {product.rating} ⭐
            </p>
            <p className="text-xl mb-6">
              <strong className="text-[rgb(0,116,184)]">Omborda:</strong>{' '}
              {product.stock} ta
            </p>

            <h2 className="text-2xl font-semibold mb-2 text-[rgb(0,116,184)]">
              Tavsif:
            </h2>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
