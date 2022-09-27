import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const fetchData = await response.json();
      console.log(
        "🚀 ~ file: useFetch.jsx ~ line 11 ~ fetchData ~ fetchData",
        fetchData
      );

      setData(fetchData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
