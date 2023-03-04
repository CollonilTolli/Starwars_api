import { useDispatch } from "react-redux/es/exports";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  enableFetching,
  disableFetching,
} from "../redux/reducers/isFetchingReducer";

export const useQuery = ({ apiKey }: any) => {
  const [apiState, setApiState] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = `https://swapi.dev/api/${apiKey}/?format=json`;

    const spinnerHandler = (val: any) => {
      if (val) {
        dispatch(enableFetching());
      } else {
        dispatch(disableFetching());
      }
    };

    spinnerHandler(false);
    axios.get(apiUrl).then((resp) => {
      spinnerHandler(true);
      const allPersons = resp.data;
      setApiState(allPersons);
    });
  }, [setApiState, apiKey, dispatch]);

  return apiState;
};
