//IIFE=>Immediately Invoked Function Expression

const credits = ((num) => {
  console.log("immediate result", num);
  let credits = num;
  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log("continue game");
    }
    if (credits < 0) {
      console.log("You are finished");
    }
  };
})(3);

credits();
credits();
credits();
credits();
