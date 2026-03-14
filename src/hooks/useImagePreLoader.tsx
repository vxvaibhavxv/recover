import { useEffect } from "react";

import Image1 from "../assets/lily.png";
import Image2 from "../assets/sunflower.png";

const imagesToPreload = [Image1, Image2];

const useImagePreloader = () => {
  useEffect(() => {
    const cacheImages = async (srcArray: string[]) => {
      const promises = srcArray.map((src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.src = src;
          img.onload = () => resolve(undefined);
          img.onerror = () => reject(undefined);
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {}
    };

    cacheImages(imagesToPreload);
  }, []);

  return;
};

export default useImagePreloader;
