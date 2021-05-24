import React from 'react'
import { img_200, unavailable } from '../config/config';
import ContentModal from './ContentModal';
import './SingleContent.css';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div className="singleContent-img">
         <img src={poster ? `${img_200}/${poster}` : unavailable} alt={title} />
      </div>
      <div className="singleContent-info">
        <h1>{title}</h1>
        <p className="singleContent-info_date">{date}</p>
        <p className="singleContent-info_vote">{vote_average}</p>
        <p className="singleContent-info_mediaType">{media_type === "tv" ? "TV": "Filmas"}</p>
        <button>Žiūrėti</button>
      </div>
    </ContentModal>
  )
}

export default SingleContent
