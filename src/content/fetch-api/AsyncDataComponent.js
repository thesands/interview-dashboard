import React, { useState, useEffect } from 'react';

const AsyncDataComponent = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return <div data-testid="data">{data ? 'data received' : 'Loading...'}</div>;
};

export default AsyncDataComponent;
