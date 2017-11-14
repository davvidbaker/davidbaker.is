const smoothScrollTo = (
  node,
  scrollTo,
  { duration = 300 } = { duration: 300 }
) => {
  console.log('scrolling to', scrollTo);
  console.log('node', node);
  // debugger;
  if (node) {
    const scrollFrom = node.scrollTop;
    const scrollDist = scrollTo - scrollFrom;

    let startTime = null;
    let lastScrollTop = node.scrollTop + 10; // just set it to something not equal to node.scrollTop

    const scroll = timestamp => {
      if (!startTime) {
        startTime = timestamp;
      }

      const dt = timestamp - startTime;

      // eslint-disable-next-line no-param-reassign
      node.scrollTop = scrollFrom + scrollDist * dt / duration;

      // if scrolling stopped, quit the loop
      if (
        Math.abs(node.scrollTop - scrollTo) > 1 &&
        node.scrollTop !== lastScrollTop
      ) {
        window.requestAnimationFrame(scroll);
        lastScrollTop = node.scrollTop;
      }
    };

    window.requestAnimationFrame(scroll);
  }
};

export default smoothScrollTo;
