// Modify the function names and variables to be unique
const customScrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

CustomScrollReveal().reveal(".header__image img", {
  ...customScrollRevealOptions,
  origin: "right",
});
CustomScrollReveal().reveal(".header__content h1", {
  ...customScrollRevealOptions,
  delay: 500,
});
CustomScrollReveal().reveal(".header__content p", {
  ...customScrollRevealOptions,
  delay: 1000,
});
CustomScrollReveal().reveal(".header__content form", {
  ...customScrollRevealOptions,
  delay: 1500,
});
