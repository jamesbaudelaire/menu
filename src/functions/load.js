import React, { useState, useEffect } from "react";

export const Load = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return { loading };
};
