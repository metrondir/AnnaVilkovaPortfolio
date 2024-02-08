const handleScroll = (ref) => {
  if (window.innerWidth < 768) {
    setTimeout(() => {
      ref.scrollIntoView({
        inline: "center",
        behavior: "auto",
      });
    }, 222);
  } else {
    setTimeout(
      () => ref.scrollIntoView({ inline: "center", behavior: "smooth" }),
      222
    );
  }
};

export default handleScroll;
