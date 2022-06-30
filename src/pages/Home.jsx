import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Video from '../components/Video/Video';
import useVideoList from '../hooks/useVideoList';

export default function Home() {
     const [page, setPage] = useState(1);
     const { status, hasMore, videos } = useVideoList(page);

     const center = {
          textAlign: "center",
     }

     return (
          <>
               {status.error && <p style={center}>There wsa an error!</p>}
               {!status.loading && videos.length === 0 && <p style={center}>No data found</p>}
               {status.loading && <p style={center}>Loading...</p>}
               {videos.length > 0 && (
                    <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page + 8)}>
                         {videos.map(video => (
                              video.noq > 0 ? <Link to={`/quiz/${video.youtubeID}`} state={video.title} key={video.youtubeID}>
                                   <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                              </Link> :
                                   <Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq} />
                         ))}
                    </InfiniteScroll>)}
          </>
     );
}