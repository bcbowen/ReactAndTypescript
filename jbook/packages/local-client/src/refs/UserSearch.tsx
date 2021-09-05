import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Tom', age: 23 },
  { name: 'Ed', age: 24 },
  { name: 'Fred', age: 34 },
  { name: 'Morty', age: 76 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [result, setResult] =
    useState<{ name: string; age: number } | undefined>(undefined);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const search = () => {
    const foundUser = users.find((user) => user.name === name);

    setResult(foundUser);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <br />

      <div>
        {result?.name}
        {result?.age}
      </div>
    </div>
  );
};

export default UserSearch;
