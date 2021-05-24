import React, { useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../components/SingleContent';
import Genres from '../components/Genres';
import CustomPagination from '../components/CustomPagination';


export const Horror = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchHorror = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    
    fetchHorror();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <Genres />
      <span className="pageTitle">Siaubo</span>
      <div className="movies">
        {
          content && content.map((c) => (
            <SingleContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path} 
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            />
          ))
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};
