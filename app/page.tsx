"use client";
import Image from "next/image";
import {useState} from 'react';
import next from '../next.png';
import tenna from '../tenna.webp';

const videos = [
  "https://www.youtube.com/embed/XEdoMoV4D6k?si=4lEO7KBNjeu-0Ihw",
  "https://www.youtube.com/embed/NlrYJXWF-yQ?si=zIgmL20c8FZ45yZU",
]

const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Home() {
  const [theVideo, setTheVideo] = useState(random(videos))

  function handleClick() {
    const theNewVideo = random(videos.filter((video) => video != theVideo))
    console.log(theNewVideo)
    setTheVideo(theNewVideo)
  }

  const left = random([0, 100, 200, 300, 400, 500])
  const rotation = random(["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285", "300", "315", "330", "345"])

  return (
    <div className="App">
      <Image src={tenna} width="120px" height="100px" className="tenna" style={{left: left + "px", transform: `rotate(${rotation}deg)`}}/>
      <div className="video-container">
        <iframe width="200" height="200" src={theVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <a href={theVideo} target="_blank">See the answer</a>
      <button onClick={handleClick}>
        <Image src={next} width="120px" height="100px"/>
      </button>
    </div>
  );
}
