import React from 'react';
import { useNews } from '../helper/NewsContextAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  const { news, loading, favorites, toggleFavorite } = useNews();

  if (loading) return <h1 className="text-white text-3xl text-center pt-20">Yuklanmoqda...</h1>;

  return (
    <main className="w-full bg-[rgb(7,24,36)] py-14">
      <section className="w-[1240px] container mx-auto grid grid-cols-3 gap-8">
        {news.map((cart) =>
          cart.products.map((p) => {
            const isFav = favorites.some((f) => f.id === p.id);

            return (
              <Link
                key={p.id}
                to={`detail/${p.id}`}
                state={{ productsData: p }}>
                <div
                  className="
                  w-full h-[450px]
                  bg-[rgb(14,45,66)] 
                  rounded-[20px]
                  p-4 
                  shadow-lg 
                  shadow-[rgba(0,116,184,0.2)]
                  border 
                  border-[rgb(32,61,80)]
                  hover:border-[rgb(0,116,184)]
                  hover:shadow-[0_0_20px_rgb(0,116,184,0.5)]
                  transition-all 
                  duration-300 
                  ease-in-out 
                  flex 
                  flex-col 
                  items-center
                  cursor-pointer 
                  group
                  relative
                ">
                  <img
                    src={p.thumbnail || "/placeholder.svg"}
                    alt={p.title}
                    className="
                    w-full
                    h-[250px]
                    object-cover 
                    rounded-[16px]
                    transition-all 
                    duration-300 
                    group-hover:scale-105
                  "
                  />

                  <h1
                    className="
                    text-white 
                    text-[20px] 
                    font-semibold 
                    mt-4 
                    text-center 
                    group-hover:text-[rgb(0,116,184)]
                    transition-all 
                    duration-300
                  ">
                    {p.title}
                  </h1>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(p);
                    }}
                    className="text-[28px] transition-all duration-300 absolute right-[20px] top-[20px] bg-[rgba(0,0,0,0.3)] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[rgba(0,0,0,0.5)]">
                    {isFav ? (
                      <span className="text-red-500">❤️</span>
                    ) : (
                      <span className="text-white">🤍</span>
                    )}
                  </button>
                </div>
              </Link>
            );
          })
        )}
      </section>
    </main>
  );
};

export default Home;
