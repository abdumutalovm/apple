import React, { useEffect } from "react";
import HoverCarousel from "hover-carousel";

function Home() {
  const visionPro = [
    "https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/drawer/ir_startframe__c5rzvbueg3ee_large.jpg",
    "https://www.apple.com/newsroom/videos/media/ultra-high-res-display-system/posters/Apple-WWDC23-Vision-Pro-ultra-high-res-display-system-230605.jpg.large_2x.jpg",
    "https://www.apple.com/newsroom/videos/media/rotation/posters/Apple-WWDC23-Vision-Pro-rotation-230605.jpg.large_2x.jpg",
    "https://i.ytimg.com/vi/TX9qSaGXFyg/sddefault.jpg",
    "https://www.cnet.com/a/img/resize/836df4fa6521883b0dd052c233ba0a0ccb2c3551/hub/2023/06/06/1a6d950d-f5d4-42ff-8bba-f0eb91ddb6cb/vision-pro-apple-walks-through-mixed-reality-headset-design-mp4-00-00-37-04-still001.png?auto=webp&fit=crop&height=675&width=1200"
  ];


  return (
    <div className="px-32 py-4 max-w-screen-2xl mx-auto">
      <div className="rounded-xl bg-black p-2 mb-3">
        <HoverCarousel images={visionPro} />
      </div>

      <div>

      </div>
    </div>
  );
}

export default Home;
