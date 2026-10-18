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
  //empty town
  "https://www.youtube.com/embed/p8jCS2nSMmI?si=jaxs3vsVy_VarXlt",
  //Weird Birds
  "https://www.youtube.com/embed/YPLn6R2T5Qw?si=EuwNFP7uffTyb2HH",
  //Field of Hopes and Dreams
  "https://www.youtube.com/embed/ymNgfwgh1TU?si=dnPKCqRCG6uKILmZ",
  //fanfare from rose of winter
  "https://www.youtube.com/embed/OmMdXpuscRY?si=T8dawDqr6I1vNrej",
  //lantern
  "https://www.youtube.com/embed/5kJ4JJSsJMQ?si=hv4osY9tPhJiPxsj",
  //I'm very bad
  "https://www.youtube.com/embed/_km4FuXOCbs?si=6GiimJ62IjMZKe87",
  //checker dance
  "https://www.youtube.com/embed/j54JPLQWdyQ?si=0vjvasZkXWVEYj8d",
  //quiet autumn
  "https://www.youtube.com/embed/SWAQzCNeGWg?si=xI0rpnbTriFtRYVJ",
  //scarlet forest
  "https://www.youtube.com/embed/h2B5F8skpGE?si=UggWfeMTprysNkV1",
  //thrash machine
  "https://www.youtube.com/embed/imH2hItIFlk?si=SqdrcLwjWsrXFzFW",
  //vs lancer
  "https://www.youtube.com/embed/Ce-gU8G6Vik?si=YjYcI0mU8-9-Uizq",
  //basement
  "https://www.youtube.com/embed/Cnrvt1h5La4?si=FsFxJ01AL7Dl-HFC",
  //imminent death
  "https://www.youtube.com/embed/Ud9mGWvkjJQ?si=pSslGeLwo9MOzHwU",
  //vs susie
  "https://www.youtube.com/embed/cGuDpoJNImA?si=1Tu9smQTVvOP88gd",
  //card castle
  "https://www.youtube.com/embed/tvjuTn9LZwY?si=Cpd50gc5m9RNywMI",
  //rouxls kaard
  "https://www.youtube.com/embed/yfC8OU2YtNo?si=qFro9NjLCLIVF3oK",
  //april 2012
  "https://www.youtube.com/embed/KWed1KcG-GA?si=w2vALDBx4BAWZalf",
  //hipshop
  "https://www.youtube.com/embed/D83BxptHcRc?si=4ZzQNNIGJXKh58-6",
  //gallery
  "https://www.youtube.com/embed/L0MAep7ml3A?si=606OmYacuygXppu7",
  //chaos king
  "https://www.youtube.com/embed/tPwzoZ-e664?si=wJb0-_JMw8olIN14",
  //darkness falls
  "https://www.youtube.com/embed/snyWVFZBFBM?si=Vp7rcg95mqPMIkf0",
  //the circus
  "https://www.youtube.com/embed/qCNztya--aw?si=3YVwipZnmsgBeAM_",
  //the world revolving
  "https://www.youtube.com/embed/Z01Tsgwe2dQ?si=YROkfDDCnVA6lCup",
  //friendship
  "https://www.youtube.com/embed/RQQ14PKhcs8?si=ovumZJ6b021lsiAg",
  //the holy
  "https://www.youtube.com/embed/8-n6HhNO57E?si=4LneIMLCy-oHzmgj",
  //your power
  "https://www.youtube.com/embed/YeU41eDS90A?si=_F49zqAsU5SrbN1u",
  //a town called hometown
  "https://www.youtube.com/embed/bYORCOOYc00?si=P2W3J9DPWPf9Gqeq",
  //you can always come home
  "https://www.youtube.com/embed/ntHQOPH7CaU?si=59Rh3uW3hhiFCpvK",
  //don't forget
  "https://www.youtube.com/embed/YLeid-bIRQA?si=yj8iJhyK6wUgfSAJ",
  //before the story
  "https://www.youtube.com/embed/_0pFoKrY5TU?si=_Cm95xxjgP5mO9oV",
  //faint glow
  "https://www.youtube.com/embed/16A13R7T0rM?si=5tM0QgDeEWWg4C6T",
  //girl next door
  "https://www.youtube.com/embed/T6UfG77Bwpo?si=FZZqYnKh6V-pX6ye",
  //my castle town
  "https://www.youtube.com/embed/Bl-YMD6yePc?si=bgYcrfw8_LolIliW",
  //ohhoohohooh
  "https://www.youtube.com/embed/_xsaAydYPIM?si=2TqVyfgKGA551lLE",
  //queen
  "https://www.youtube.com/embed/6XQv5CHmITA?si=Jp_gTPjD5HUrVEFh",
  //a cyber's world
  "https://www.youtube.com/embed/In3y0C7mQvA?si=uL8stPPZSW3J11bC",
  //a simple diversion
  "https://www.youtube.com/embed/p1U5FjgwDhA?si=6EEPuKedLbOKzFso",
  //almost to the guys
  "https://www.youtube.com/embed/TBrbkS3hDn4?si=yCCjymjQqeg6JmTR",
  //cool beat
  "https://www.youtube.com/embed/mem2LEtRj40?si=kWf0pwqSFXHsGuu-",
  //when I get mad I dance like this
  "https://www.youtube.com/embed/XH1ibcc_MpQ?si=C-_YSf1au-cApf9c",
  //cyber battle (solo)
  "https://www.youtube.com/embed/10yw5Q0mPPw?si=B7guELlQ-jv5PhCi",
  //when I get happy I dance like this
  "https://www.youtube.com/embed/bTwrnu_TFEA?si=u7Vv_kiIBWBK6LVi",
  //sound studio
  "https://www.youtube.com/embed/v4Xc64X6Npo?si=w63Qb0f_bB5DAgdK",
  //berdly
  "https://www.youtube.com/embed/2S8I1h-wNzc?si=p0OnM-E6fhBvEXpk",
  //smart race
  "https://www.youtube.com/embed/HZO3xw91eHw?si=XESA3ZknFYzkpSdq",
  //faint courage (game over)
  "https://www.youtube.com/embed/TkvdhHEuCNY?si=W6G3i1P_Wfde0Z2W",
  //welcome to the city
  "https://www.youtube.com/embed/uiou1f5nzlU?si=fBLJkTUxn5TJ1mwq",
  //mini studio
  "https://www.youtube.com/embed/OEaRlIfkURI?si=KoVoEgEoEuLMxTEr",
  //holiday studio
  "https://www.youtube.com/embed/7SAJNfCkg7U?si=RohQukoq9fSiMk_6",
  //cool mixtape
  "https://www.youtube.com/embed/EeVEyBGPgLY?si=jSZA-y4mEuR4CBZ7",
  //hey every
  "https://www.youtube.com/embed/DZKnVQL3r2I?si=lkbRzpzHWmITxm7y",
  //spamton
  "https://www.youtube.com/embed/cSm5gKlmw2M?si=a7b6J8Yw-xrheqzC",
  //now's your chance to be a
  "https://www.youtube.com/embed/2GbBD_7AsGA?si=pb-cyZK4qReRbYEa",
  //elegant entrance
  "https://www.youtube.com/embed/j6baKyF2Ksc?si=1EzjMXLr6xqZtVzR",
  //bluebird of misfortune
  "https://www.youtube.com/embed/yud5H-vnbJw?si=L9qzaMatSazZOiFr",
  //pandora palace
  "https://www.youtube.com/embed/q-5cXVcCOUs?si=KE_IpWzwvHN9emrH",
  //keygen
  "https://www.youtube.com/embed/-9UUuxhh4Ao?si=fet6IVaBM_O__FMR",
  //acid tunnel of love
  "https://www.youtube.com/embed/McOfpEEXnq0?si=EnF5_2_Hc_HJA9tV",
  //it's pronounced rules
  "https://www.youtube.com/embed/DQ0aryDlPi4?si=9DDcGyBm16BNiQbi",
  //lost girl
  "https://www.youtube.com/embed/P89rxnT7lKw?si=CUwIxTBvpI9q8EgH",
  //ferris wheel
  "https://www.youtube.com/embed/PcfyVaTUops?si=9CwO5n6SZeD8I0KA",
  //attack of the killer queen
  "https://www.youtube.com/embed/vBjscyFC3jo?si=jU_pMwp9rXB9kehF",
  //giga size
  "https://www.youtube.com/embed/_bVl2e-Wxzg?si=Ua_sXbRZ3LftRPC0",
  //powers combined
  "https://www.youtube.com/embed/iAxDtmz0ehs?si=uAFnHsi7_Nog508_",
  //knock you down
  "https://www.youtube.com/embed/e4EZa--N028?si=Y0Jlw3GEaQfC7jkS",
  //the dark truth
  "https://www.youtube.com/embed/o3UNWAT81f0?si=4uVqccIRgHaJk_Pb",
  //digital roots
  "https://www.youtube.com/embed/Fhv55ss0B4A?si=9MXGpinCzUEtRSBJ",
  //deal gone wrong
  "https://www.youtube.com/embed/cfvB-bVpH7Y?si=aDRrSbHMjD4FcSmZ",
  //big shot
  "https://www.youtube.com/embed/uivFFnCI8tM?si=BWfngrSbGsyXjqmb",
  //a real boy
  "https://www.youtube.com/embed/rSXxltE8mQE?si=SY44B-_b2SH19Hy0",
  //dialtone
  "https://www.youtube.com/embed/Cki-mnHhNtY?si=lEpQZzeuIGw9-6jT",
  //sans
  "https://www.youtube.com/embed/FtHT_GJLPhE?si=dtvurUUfguIbUKgv",
  //chill jailbreak alarm to study to
  "https://www.youtube.com/embed/_BF-Hq3lOf0?si=jUSRLyARVjsGfj6r",
  //you can always come home
  "https://www.youtube.com/embed/Xn8zYRVjxNE?si=PUQY2VT8BKjjBr6e",
  //until next time
  "https://www.youtube.com/embed/CYpfk3qwb1s?si=w5vP6E62_Rs42Zl2",
  //before the story
  "https://www.youtube.com/embed/ymD1bzw0CDs?si=mtoTq8cu07fV31Gw",
  //berdly rejected concept
  "https://www.youtube.com/embed/lVqi13hWb00?si=VivzzCyQWisnhv8I",
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
