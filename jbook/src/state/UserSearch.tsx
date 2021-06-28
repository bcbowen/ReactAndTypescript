import { useState } from 'react';

const users = [
  { name: 'Tom', age: 23 },
  { name: 'Ed', age: 24 },
  { name: 'Fred', age: 34 },
  { name: 'Morty', age: 76 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [result, setResult] =
    useState<{ name: string; age: number } | undefined>(undefined);

  const search = () => {
    const foundUser = users.find((user) => user.name === name);

    setResult(foundUser);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
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
