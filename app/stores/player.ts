export const usePlayerStore = defineStore('playerStore', () => {
  const element = ref<HTMLAudioElement | null>(null);
  async function play() {
    if (element.value) {
      /** Play Audio Player Element */
      try {
        element.value.play();
      }
      catch (error) {
        console.warn(error);
      }
    }
  }
  return {
    element,
    play,
  };
});
