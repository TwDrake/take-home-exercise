import { useCallback, useState } from "react";

interface Country {
  name: string;
  capital: string;
  states: string;
}

interface Result {
  data?: Country;
  loading: boolean;
  error?: any;
}

export const useGetCountry = (): [Result, (id: string) => void] => {
  const [result, setResult] = useState<Result>({ loading: false });

  const fetchCountry = useCallback(async (id: string) => {
    setResult((prevResult) => ({ ...prevResult, loading: true, error: null }));
    try {
      const response = await fetch(`http://localhost:3000/countries/${id}`);
      if (!response.ok) throw response.statusText;
      const result: Country = await response.json();
      setResult({ data: result, loading: false, error: undefined });
    } catch (error: any) {
      setResult({
        data: undefined,
        error: error.message || error,
        loading: false,
      });
    }
  }, []);

  return [result, fetchCountry];
};
