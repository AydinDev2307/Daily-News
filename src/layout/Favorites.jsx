import React from 'react';
import { useNews } from '../helper/NewsContextAPI';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, toggleFavorite } = useNews();

  if (favorites.length === 0)
    return (
      <div className="w-full min-h-screen bg-[rgb(7,24,36)] pt-20">
        <h1 className="text-white text-3xl text-center">
          Hozircha saralanganlar yo‘q 🙂
        </h1>
        <div className="text-center mt-6">
          <Link to="/" className="text-[rgb(0,116,184)] text-xl hover:underline">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    );

  return (
    <main className="w-full min-h-screen bg-[rgb(7,24,36)] py-14">
      <div className="w-[1240px] container mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8 border-b border-[rgb(32,61,80)] pb-4">
          Saralanganlar ({favorites.length})
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {favorites.map((p) => (
            <div
              key={p.id}
              className="w-full h-[480px] bg-[rgb(14,45,66)] rounded-[20px] p-4 shadow-lg border border-[rgb(32,61,80)] flex flex-col justify-between relative group hover:border-[rgb(0,116,184)] transition-all duration-300">
              
              <Link to={`/detail/${p.id}`} state={{ productsData: p }}>
                <img
                  src={p.thumbnail || "/placeholder.svg"}
                  alt={p.title}
                  className="w-full h-[250px] object-cover rounded-[16px]"
                />
                <h1 className="text-white text-[20px] font-semibold mt-4 text-center group-hover:text-[rgb(0,116,184)] transition-colors">
                  {p.title}
                </h1>
              </Link>

              <div className="flex justify-center pb-4">
                <button
                  onClick={() => toggleFavorite(p)}
                  className="px-6 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-300 flex items-center gap-2">
                  <span>❤️</span> Olib tashlash
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
