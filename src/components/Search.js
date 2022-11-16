import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({query, setQuery}) {

const handleSearch = event => {
event.preventDefault()
setQuery(event.target.value)
}

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;