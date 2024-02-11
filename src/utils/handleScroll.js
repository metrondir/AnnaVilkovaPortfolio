const handleScroll = (ref) => {
  if (window.innerWidth < 768) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const scrollBehavior = isIOS ? "smooth" : "auto";

    setTimeout(
      () => ref.scrollIntoView({ inline: "center" }, scrollBehavior),
      222
    );
  } else {
    setTimeout(
      () => ref.scrollIntoView({ inline: "center", behavior: "smooth" }),
      222
    );
  }
};

export default handleScroll;
