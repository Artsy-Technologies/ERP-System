import './videocard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} className="video-image" />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.duration}</p>
        <p>{video.type}</p>
      </div>
    </div>
  );
};

export default VideoCard;