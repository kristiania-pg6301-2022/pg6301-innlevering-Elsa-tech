import React, { useEffect, useState } from "react";

export function useLoader(loadingFunction) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function reload() {
    try {
      setLoading(true);
      setData(await loadingFunction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(reload, []);

  return { loading, error, data: data, reload };
}
