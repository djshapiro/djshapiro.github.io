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
  //flashback excerpt
  "https://www.youtube.com/embed/tQ5WnrSNHIg?si=e5_8B6t8mc5dO30W",
  //feature presentation
  "https://www.youtube.com/embed/vGn0HeIjEbg?si=Pwc0hkxIm6hUrJVT",
  //and now for today's sponsors
  "https://www.youtube.com/embed/j69knNADinw?si=h5JEyMAl0Wcb8QE_",
  //mike the board please
  "https://www.youtube.com/embed/YsZoTTl59hg?si=GrVLWJO2uIohzjuj",
  //sandy board
  "https://www.youtube.com/embed/CGTAz3MC8NI?si=VOMc3JobfJaW_lWB",
  //adventure board
  "https://www.youtube.com/embed/9PpyIF7ad6E?si=jgGa9umuFBzeCbjI",
  //query
  "https://www.youtube.com/embed/2LkI2_NdoZE?si=E6j_XDz0E7UUbOZ5",
  //quiz
  "https://www.youtube.com/embed/oEG_zTZC5wM?si=NWJ3b_aNu2Al5Crw",
  //dig dig to the center of the earth
  "https://www.youtube.com/embed/k3CtbHTMpiA?si=gq6PfdZugdOPImld",
  //pushing buddies
  "https://www.youtube.com/embed/spBYKRPlx6U?si=qLH14Wi11lKNttJ8",
  //ruder buster
  "https://www.youtube.com/embed/N117e1Ub39A?si=27cVpKqpv-qIJz7C",
  //physical challenge
  "https://www.youtube.com/embed/EfUKZ3_se3M?si=BJPUps1vkibl6D1A",
  //board clear
  "https://www.youtube.com/embed/i-4IKSA19UI?si=GSC6CGUeETnVf9A1",
  //welcome to the green room
  "https://www.youtube.com/embed/GrCp8AHdgEM?si=Y9eRgUjBo2TjE5-1",
  //vapor buster
  "https://www.youtube.com/embed/3vh8LYSuOvA?si=SK3WLE0kylYQA5HY",
  //paradise paradise
  "https://www.youtube.com/embed/ulaTvZ1gSL0?si=TewHjXj7C0oi9mTr",
  //raft ride
  "https://www.youtube.com/embed/5KSTNJnVGAE?si=YsONyx4TBspCW0yH",
  //south of the border
  "https://www.youtube.com/embed/S0MiyvNNAsU?si=Ieb9zeMBazkl5jM0",
  //soundcheck
  "https://www.youtube.com/embed/CINnefzXOcg?si=zNBhGKJbNTcCOmOl",
  //raise up your bat
  "https://www.youtube.com/embed/85WD93lz5GU?si=CEh4spJbs9vei-Ma",
  //king of rolypoly
  "https://www.youtube.com/embed/bNry5GiIqHs?si=YiHKIy3V-UyOyar1",
  //glowing snow
  "https://www.youtube.com/embed/pCF3YY9BwBs?si=A9Rrq31OxhJGMG3Y",
  //big city board
  "https://www.youtube.com/embed/UqPfyWC1I3I?si=9wUo4EJS5dRmMPQy",
  //doom board
  "https://www.youtube.com/embed/aDPOR4hfe-U?si=QZ3-BUxSA-iTfY6X",
  //metaphysical challenge
  "https://www.youtube.com/embed/yPwjadZiNnU?si=X6T2n6lg_5SXp4HB",
  //tv world
  "https://www.youtube.com/embed/DstO9slC_5U?si=w8iyN4DXpou9akDt",
  //its tv time
  "https://www.youtube.com/embed/F2PJbTuZlTU?si=CTZQrzYHL74vYrYu",
  //hall of fame
  "https://www.youtube.com/embed/qV2wWw1f4KE?si=Lm8sJokOEN0iefXK",
  //breath
  "https://www.youtube.com/embed/3LMmXO01F7s?si=ox5oLskXEswa6h0s",
  //black knife
  "https://www.youtube.com/embed/B8Us0DZgexw?si=0bpKxA_UCqy6snWo",
  //crickets
  "https://www.youtube.com/embed/kScDdlhORBw?si=Emmhlmt6F3A2kElV",
  //dump
  "https://www.youtube.com/embed/xVvCCqC3Cik?si=NOYNGl9kLcB-Pmh2",
  //sword
  "https://www.youtube.com/embed/KAtudLu42vA?si=1PDS-uNgrS3UgrvS",
  //northernlight
  "https://www.youtube.com/embed/GconqBHsQDs?si=QuFb1mo81ajaKaoG",
  //glacier
  "https://www.youtube.com/embed/9a-h8bddlY0?si=IWgxn_vp9z3cmWke",
  //bit roots
  "https://www.youtube.com/embed/fMfro9XfU1w?si=1vy_sJ8Rd_Jw0MVF",
  //eram
  "https://www.youtube.com/embed/c9pnoMwi3PA?si=SdHiqFmdjxaPtM6C",
  //burning eyes
  "https://www.youtube.com/embed/TBVteb9Z6ps?si=iyKIls1-z9AcriT9",
  //old wooden rafters
  "https://www.youtube.com/embed/I8Ooxs-Uqog?si=0Mp3bZGFLj57zcJN",
  //hymn
  "https://www.youtube.com/embed/BIw9RAqj2K0?si=s7uXimlh0UO_n2Qg",
  //another day in hometown
  "https://www.youtube.com/embed/zqWQaTovHU8?si=UvpmgBKcrTomYtBW",
  //friends
  "https://www.youtube.com/embed/ZRo_i3hCN98?si=LqF3vhbq1lpZgN4Y",
  //castle funk
  "https://www.youtube.com/embed/2V_wyZdgVMg?si=3G5fLGwh2mBNkh8v",
  //knock you down rhythm version
  "https://www.youtube.com/embed/27oficnsQPo?si=P2lJDN4lLVlxUzeA",
  //gingerbread house
  "https://www.youtube.com/embed/-drXtC53Kwc?si=Qjo2gdKxyDuK9A1u",
  //the distance between two
  "https://www.youtube.com/embed/byUCuhB8r5Q?si=zNg0jlXcNK0hGwSR",
  //C
  "https://www.youtube.com/embed/6z7x_hu4t4Y?si=w81uo5beL--divzy",
  //atrium
  "https://www.youtube.com/embed/JygDUsh9W5E?si=nUrm_2J0LspCjE_C",
  //dark sanctuary
  "https://www.youtube.com/embed/cNG0Ay3B3Mk?si=Jd1Iy8sg62LMaREZ",
  //from now on battle 2
  "https://www.youtube.com/embed/OobVFldn6As?si=F9lzoDK4wSbVsG4W",
  //gyaa ha ha
  "https://www.youtube.com/embed/iqoYq4x0RQw?si=oSQk8crvJQ0pWpea",
  //fireplace
  "https://www.youtube.com/embed/xz61v-lss5g?si=re0NjrIvm_luHKHs",
  //a dark zone
  "https://www.youtube.com/embed/K-ifukvnICY?si=mUhVH0AVYdLntHRe",
  //mysterious ringing
  "https://www.youtube.com/embed/WP_5b9kfQAI?si=xqeE-zJ-mPGspEaO",
  //ever higher
  "https://www.youtube.com/embed/DxPHMcpuYeA?si=pM_zv0lISu0xnaUt",
  //wise words
  "https://www.youtube.com/embed/JkEhQ3qJubU?si=j-DBjyxfsyoI6_SV",
  //piano that may not be played that well
  "https://www.youtube.com/embed/Y9XRMC0ez7w?si=KeNytIrk9u7y-K6g",
  //hammer of justice
  "https://www.youtube.com/embed/tBdLO8u-0L8?si=NtTgn5tfK1sl-oDR",
  //12am
  "https://www.youtube.com/embed/j1fPfxLYg-w?si=qqf8ESl8eMKkzy_N",
  //the second sanctuary
  "https://www.youtube.com/embed/Jp7kfYH4VaE?si=PeR75Tpn3Iu44x1x",
  //ripple
  "https://www.youtube.com/embed/lHR_z-hldgY?si=QHy-W5J-M32s1X4_",
  //13am
  "https://www.youtube.com/embed/sbzmYjE49N4?si=OYLJvRkCvwTqs3e-",
  //third sanctuary
  "https://www.youtube.com/embed/7f1RK1m7qvc?si=qnCAWt_5VnMYevgX",
  //dark place
  "https://www.youtube.com/embed/SG177cepVfk?si=4u3oUT7Hxyg6vXXF",
  //heavy footsteps
  "https://www.youtube.com/embed/qGpW9CLlxwM?si=EzgLjBdPKdqsjVvW",
  //crumbling tower
  "https://www.youtube.com/embed/z2IT2YzscSE?si=e3w1gAW9yxM9igHU",
  //spawn
  "https://www.youtube.com/embed/iRMn2HlCRFI?si=onGWZXlsiYRBeGKj",
  //guardian
  "https://www.youtube.com/embed/nP9mB1sVJz4?si=cXTdbfTF58GvSy8Y",
  //need a hand?
  "https://www.youtube.com/embed/hFYTL3mTsdo?si=Vacyg0q9vyqoprm2",
  //the place where it rained
  "https://www.youtube.com/embed/aSc7Yuwn1Ao?si=DuNCGBeP3n1-GMX1",
  //the ol jitterbug
  "https://www.youtube.com/embed/XBwYm4hHJMU?si=Hj8CZwK8K7HLIiXS",
  //neverending night
  "https://www.youtube.com/embed/QZ03-aaO4sA?si=KiZCKdUGgU8f8NSa",
  //the legend...?
  "https://www.youtube.com/embed/Tl4BKNfomo0?si=FvO0L7BNdWQGOmkZ",
  //with hope crossed on our hearts
  "https://www.youtube.com/embed/dXzvCCljzXY?si=q_28dUYpfp7TFt-B",
  //volume adjustment
  "https://www.youtube.com/embed/SBvEH9yV9yw?si=FFjgFWgUz3Hc8qQD",
  //catswing
  "https://www.youtube.com/embed/r-DvoCTarMQ?si=PgzIp09YyGBRisYc",
  //air waves
  "https://www.youtube.com/embed/jsXXKQ_nl30?si=FV2FWbgx4t44VWcE",
  //concert for you
  "https://www.youtube.com/embed/HQj78oXGrhw?si=LMvC6UPjUIGkFJro",
  //chapter 5 logo
  "https://www.youtube.com/embed/N-9A5952ZvM?si=Rk4A4dx7Gk9RLPFu",
  //inappropriate recycling
  "https://www.youtube.com/embed/Bh8eaKSjEYw?si=e8_K96UKApYQ76Vc",
  //pirate dojo
  "https://www.youtube.com/embed/RWADynlMHZw?si=odfZetkcrscP4iOd",
  //4rd sanctuary
  "https://www.youtube.com/embed/h6bb2I-8Pho?si=10JS-peHnQNqnUAS",
  //festival
  "https://www.youtube.com/embed/UfVnA3q6z4o?si=AwF5CHsMCAe2Vd4W",
  //catfession
  "https://www.youtube.com/embed/5BI_k5K00Fg?si=V9AgQP2tAKQa5UTi",
  //bratfession
  "https://www.youtube.com/embed/SydvbJPnpUM?si=0CyZLFsxe7pIhs0Q",
  //I guess I'm in love
  "https://www.youtube.com/embed/KTOreU_aOr4?si=_9g6rIwao5PhRmrd",
  //weirder birds
  "https://www.youtube.com/embed/6q8NOzhtJCg?si=9ImieqyoJNx591oo",
  //your dad's best friend
  "https://www.youtube.com/embed/XGbJbxiXS0o?si=hl6gaA1K17Cj96er",
  //garden of hopes and dreams
  "https://www.youtube.com/embed/MzEHcwoNlbE?si=THAtC_f8GXw9NLOM",
  //rakuichi buster
  "https://www.youtube.com/embed/feId4ZUEF84?si=Jjm59NXYOuMAp1ps",
  //the diner song of best friends
  "https://www.youtube.com/embed/6wmEVGt482w?si=fCleTj6LzfTK6ntG",
  //ride the board
  "https://www.youtube.com/embed/FjS4Nd174Jo?si=dPxYTb27WOS8ydNd",
  //quiet glade
  "https://www.youtube.com/embed/w55JVwZdjtA?si=O9f1gZKIac3hxTvZ",
  //who might you be
  "https://www.youtube.com/embed/7drCWkXZSF4?si=tW7GSLcHcaDpNwEM",
  //petal dance
  "https://www.youtube.com/embed/RsAu3BDaAp8?si=YKWZ1DSjUj0xhfgc",
  //flying feather
  "https://www.youtube.com/embed/C11U0YZZLIg?si=C0jfvA10FO6LM1SC",
  //sunset of seven suns
  "https://www.youtube.com/embed/_Q6S2XgQJ8c?si=XGFEbrBPuEJp4ZJQ",
  //shop 3
  "https://www.youtube.com/embed/wsYUaus3RGI?si=5QYumV9mNQji9snc",
  //violet tactics
  "https://www.youtube.com/embed/GYF2QJFjygE?si=P5_s6x7vWMwUqS6F",
  //flower king
  "https://www.youtube.com/embed/GpvQ-jO3e4E?si=1_jId_X3umc0iv2H",
  //flower foyer
  "https://www.youtube.com/embed/i0Hcnlm4I8M?si=LxuPjOc62AP3Yjol",
  //flower castle
  "https://www.youtube.com/embed/ICFPzrihGX8?si=_ylvK5ML8WuTQzS7",
  //thousand cafe zukan
  "https://www.youtube.com/embed/-hxMwv7iksk?si=ZQ-x0Q0TD-ZC6WFp",
  //I'm telling
  "https://www.youtube.com/embed/CvFuMiWEryM?si=BCnor_bNg2A20oDJ",
  //stop criminel
  "https://www.youtube.com/embed/kXp2H7GbYis?si=gZn5WB-Qme4VlsIg",
  //loving steps
  "https://www.youtube.com/embed/tLAxahP5scs?si=Rs-ovb5SeAEYr5lz",
  //onsen
  "https://www.youtube.com/embed/o681RqsnRM0?si=kQNyp2BCpX2KuIrC",
  //beautiful bathrom
  "https://www.youtube.com/embed/tDSDO3UDKQs?si=WC2enEDynNcO5UlZ",
  //pink
  "https://www.youtube.com/embed/5B9N1ALeLPo?si=BeLSuxld33LrSsea",
  //cutie mew mew magic
  "https://www.youtube.com/embed/tlFnfEWZCtQ?si=Ak_TGxck-r-Cpan-",
  //running sky
  "https://www.youtube.com/embed/1kGmc1BOyPY?si=jwTEzec47LuHzT71",
  //flower man
  "https://www.youtube.com/embed/GWf9_qSrnOM?si=25OSWT6_H1WpFbvp",
  //that day
  "https://www.youtube.com/embed/Kgxj0rE2pzU?si=vecmFztymmHTD7jF",
  //dreamwatchers
  "https://www.youtube.com/embed/TkAa3zc4rlU?si=CtI7HqeMS8iGcvVC",
  //weak flowers
  "https://www.youtube.com/embed/7cw2UNfdrEc?si=vPNh0QLnCNTpM8x7",
  //walking home
  "https://www.youtube.com/embed/W-ef0vk66HM?si=7YgANRSSeyJSzlW_",
  //field of hopes and dreams piano
  "https://www.youtube.com/embed/hrkQdid5VxM?si=seI0u07QlLUQQDWe",
  //goodnight sweet prince
  "https://www.youtube.com/embed/QBf09fw0OhQ?si=DVSV4ujSKwcIYNuw",
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
