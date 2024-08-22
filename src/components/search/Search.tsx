'use client';

import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import BorderEffect from '../BorderEffect';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    query ? params.set('query', query) : params.delete('query');

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleButtonClick = () => {
    if (query.trim()) {
      push(`/search?query=${query.trim()}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      push(`/search?query=${query.trim()}`);
    }
  };

  useEffect(() => {
    // This ensures that the search query is synced with the URL params
    if (searchParams.get('query') !== query) {
      setQuery(searchParams.get('query') || '');
    }
  }, [searchParams, query]);

  return (
    <div className="group relative flex flex-1 flex-shrink-0 rounded-md border-2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md py-[9px] pl-10 pr-0 text-sm text-black outline-none placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={query}
      />
      <BorderEffect />
      <button
        onClick={handleButtonClick}
        className="text-md absolute bottom-0 right-0 top-0 transform rounded-md bg-red-600 px-8 text-white hover:bg-red-500"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
