import React, { useState, useEffect } from "react";

export const Load = time => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, time);
  }, []);

  return { loading };
};
