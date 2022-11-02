import { useEffect, useState } from "react";

export enum SoundEffects {
  PLINK = "/plink.wav",
  POWER_UP = "/power-up.wav"
}

/**
 * Hook to interface with the good ol' plink.
 * @returns
 */
export const useSoundEffect = (soundName: SoundEffects) => {
  const [sound, setSound] = useState<HTMLAudioElement>();
  useEffect(() => {
    const wav = new window.Audio(soundName);
    wav.volume = 0.15;
    setSound(wav);
  }, [soundName]);

  /**
   * Play the plink sound.
   * @returns An empty promise... sounds familiar. </3
   */
  const play = () => sound?.play();
  return { play };
};
