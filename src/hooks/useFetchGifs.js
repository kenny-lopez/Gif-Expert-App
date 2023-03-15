import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(data => {

      setTimeout(() => {
        setState({
          data: data,
          loading: false,
        });
      }, 500);

    });
  }, [category]);

  return state;
};

export default useFetchGifs;
