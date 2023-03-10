import React from "react";
import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {

  console.log('item', JSON.stringify(item));

  let firstDate = new Date(item.first_air_date);

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">
            {item.original_name}
          </div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average} pontos
            </div>
            <div className="featured--year">
              {firstDate.getFullYear()}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons > 1 ? `${item.number_of_seasons} temporadas` : `1 temporada`}
            </div>
          </div>
          <div className="featured--description">
            {item.overview}
          </div>
          <div className="featured--buttons">
            <a href="" className="featured--watchbutton">▶ Assistir</a>
            <a href="" className="featured--mylistbutton">﹢ Minha Lista</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;