export const runtimeToStr = (runtime: number): string => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours + "h " + minutes + "m";
};
