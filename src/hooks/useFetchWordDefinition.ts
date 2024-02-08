import { useState, useEffect, useRef } from 'react';
import { WordDefinition } from '../types/types';

const useFetchWordDefinition = (searchText: string) => {
  const [wordDefinition, setWordDefinition] = useState<WordDefinition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!searchText.trim()) {
      setWordDefinition([]);
      setError(null);
      return;
    }

    const fetchWordDefinition = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;

      setIsLoading(true);

      try {
        const res = await fetch(URL, {
          signal: abortControllerRef.current.signal,
        });
        if (res.status === 404) {
          setError("Page not found");
          setWordDefinition([]);
          return;
        }
        const data = await res.json() as WordDefinition[];
        setWordDefinition(data);
        setError(null);
      } catch (error: any) {
        if (error.name === "AbortError") return;
        setError(error.message);
        setWordDefinition([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWordDefinition();

    return () => abortControllerRef.current?.abort();
  }, [searchText]);

  return { wordDefinition, isLoading, error };
};

export default useFetchWordDefinition;