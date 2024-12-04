'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const videos = [
    { id: 1, src: "https://res.cloudinary.com/dcqtminhu/video/upload/v1729516554/4k_video_gqbfxm.mp4" },
    { id: 2, src: "https://res.cloudinary.com/dcqtminhu/video/upload/v1733194211/How_a_Drummer_exit_ckeuof.mp4" },
    { id: 3, src: "https://res.cloudinary.com/dcqtminhu/video/upload/v1729517794/Espectacular_efecto_hover_para_tus_cards_con_HTML_y_CSS_huyncb.mp4" },
    { id: 4, src: "https://res.cloudinary.com/dcqtminhu/video/upload/v1733194311/MB_16073_16073_MA_ES_wtl_ZAI_Vid_Res_1080x1920_m-ftn-wrk_ani_our___tgoief.mp4" },
    { id: 5, src: "https://res.cloudinary.com/dcqtminhu/video/upload/v1733194396/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_nstsqq.mp4" },
    
]
export default function FullScreenImage({ src, alt }) {
    const handleFullscreen = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen(); // Para navegadores basados en WebKit
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen(); // Para IE/Edge
    }
  };


    


    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="w-full sm:w-1/2 lg:w-1/3">
          <video
            id={`video-${video.id}`}
            src={video.src}
            controls
            className="w-full rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleFullscreen(video.id)}
          />
        </div>
      ))}
    </div>
    );
}