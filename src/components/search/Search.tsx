'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import SearchIcon from '@/assets/icons/search_icon.svg';

const Search = ({ placeholder }: { placeholder: string }) => {
  const { push } = useRouter();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      push(`/search?query=${query.trim()}`);
    }
  };

  const onBlurHandler = () => {
    setQuery('');
    setIsFocused(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlurHandler}
        className={`absolute inset-0 z-10 m-auto h-12 w-12 cursor-pointer rounded-full bg-red-600 px-6 text-white placeholder-white outline-none transition-all duration-1000 ease-in-out ${
          isFocused ? 'w-72 cursor-text opacity-100' : 'opacity-0'
        } focus:w-72 focus:opacity-100`}
      />
      <div
        className={`absolute inset-0 m-auto h-14 w-14 cursor-pointer rounded-full bg-red-600 transition-all duration-1000 ease-in-out hover:cursor-pointer ${
          isFocused ? '-right-172 h-1 w-1 opacity-0' : 'opacity-100'
        }`}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
