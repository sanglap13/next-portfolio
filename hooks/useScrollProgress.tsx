import React, { use, useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  const updateScrollCompletion = () => {
    const currentProgress = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;

    if (scrollHeight) {
      setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
    }
  };

  useEffect(() => {
    updateScrollCompletion();
    //addEvent
    window.addEventListener("scroll", updateScrollCompletion);
    //clearEvent
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, [updateScrollCompletion]);

  return completion;
};

export default useScrollProgress;
