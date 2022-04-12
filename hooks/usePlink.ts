import { useEffect, useState } from "react";

const PLINK_SOUND = "/plink.wav";

/**
 * Hook to interface with the good ol' plink.
 * @returns
 */
const usePlink = () => {
  const [sound, setSound] = useState<HTMLAudioElement>();
  useEffect(() => {
    const plink = new window.Audio(PLINK_SOUND);
    plink.volume = 0.15;
    setSound(plink);
  }, []);

  /**
   * Play the plink sound.
   * @returns An empty promise... sounds familiar. </3
   */
  const play = () => sound?.play();
  return { play };
};

export default usePlink;
