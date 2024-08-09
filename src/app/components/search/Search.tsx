'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
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
  }, [searchParams]);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 pr-0 text-sm outline-2 outline-red-500 text-black placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={query}
      />
      <button
        onClick={handleButtonClick}
        className="text-md absolute right-0 top-0 transform bg-red-600 text-white px-8 h-full rounded-md hover:bg-red-500"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
