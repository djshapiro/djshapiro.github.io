"use client";
import Image from "next/image";
import {useState} from 'react';
import next from '../next.png';
import tenna from '../tenna.webp';

const videos = [
  "https://www.youtube.com/embed/XEdoMoV4D6k?si=4lEO7KBNjeu-0Ihw",
  "https://www.youtube.com/embed/NlrYJXWF-yQ?si=zIgmL20c8FZ45yZU",
  "https://www.youtube.com/embed/xbUi1uDwPAY?si=jYIDE-o_S6bOkBHf",
  "https://www.youtube.com/embed/C3klVnJpCFY?si=dso4GQ_xp44ASNvc",
  "https://www.youtube.com/embed/iJtIX0sQn0o?si=wR9QVho5TuDe_8PK",
  //cliffs
  "https://www.youtube.com/embed/5xmcQqEj3G4?si=8z6LVOpP8o9vwbjb",
  //the chase
  "https://www.youtube.com/embed/hWWVWfQW1H4?si=Y9GnNm_Y9E4b1Uzo",
  //thelegend
  "https://www.youtube.com/embed/PibYmujLubI?si=p8IMWQnoxycP3mH-",
  //lancer
  "https://www.youtube.com/embed/GAhBQH0Kf1I?si=_MH3mE1y4OrDOx71",
  //Rude Buster
  "https://www.youtube.com/embed/GPL5Hkl11IQ?si=OnSARjsOPcR78JFK",
]

const random = (array: any[]) => {
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
      <Image src={tenna} className="tenna" style={{left: left + "px", transform: `rotate(${rotation}deg)`}} alt="tenna"/>
      <div className="video-container">
        <iframe width="200" height="200" src={theVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <a href={theVideo} target="_blank">See the answer</a>
      <button onClick={handleClick}>
        <Image src={next} alt="next"/>
      </button>
    </div>
  );
}
