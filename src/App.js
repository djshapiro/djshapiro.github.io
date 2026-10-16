import next from './next.png';
import './App.css';
import {useState} from 'react';

const videos = [
  "https://www.youtube.com/embed/XEdoMoV4D6k?si=4lEO7KBNjeu-0Ihw",
  "https://www.youtube.com/embed/NlrYJXWF-yQ?si=zIgmL20c8FZ45yZU",
]

const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

function App() {

  const [theVideo, setTheVideo] = useState(random(videos))

  function handleClick() {
    const theNewVideo = random(videos.filter((video) => video != theVideo))
    console.log(theNewVideo)
    setTheVideo(theNewVideo)
  }

  return (
    <div className="App">
      <div class="video-container">
        <iframe width="560" height="315" src={theVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <a href={theVideo} target="_blank">See the answer</a>
      <button onClick={handleClick}>
        <img src={next} width="120px" height="100px"/>
      </button>
    </div>
  );
}

export default App;
