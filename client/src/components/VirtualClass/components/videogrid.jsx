import VideoCard from './videocard.jsx';
import '../styles/videogrid.css'

const videos = [
  {
    title: 'Cloud Computing Fundamentals Full Course',
    duration: '2 hrs',
    type: 'Recorded',
    image: '/images/cloud.png',
  },
  // Add other video objects here...
];

const VideoGrid = () => {
  return (
    <div className="video-grid">
      <h2>Recent Uploads</h2>
      <div className="grid">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;