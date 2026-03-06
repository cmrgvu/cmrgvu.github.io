// Has to be in the head tag, otherwise a flicker effect will occur.

let determineThemeSetting = () => {
  // Always return light, ignoring localStorage or system defaults
  return "light";
};
