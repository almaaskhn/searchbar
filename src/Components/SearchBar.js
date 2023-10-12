import React from 'react'
import './SearchBar.css';
import { useState } from 'react';
function SearchBar({placeholder, data}) {
const[filteredData, setFilteredData] = useState([]);
const[wordEntered, setWordEntered] = useState("");

const handleFilter = (event) =>{
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value)=>{
return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
if(searchWord==""){
    setFilteredData([]);
} else{
setFilteredData(newFilter);
}
};
const clearInput = () =>{
    setFilteredData([]);
setWordEntered("");
};
return (
    <div className='search'>
<div className='searchInputs'>
<input type='text' placeholder={placeholder}
value={wordEntered}
onChange = {handleFilter}
/>
<div className='searchIcon'>
{filteredData.length === 0 ? <button>Go</button> : <button onClick={clearInput}>X</button>}

</div>
</div>
{ filteredData.length != 0 && (
<div className='dataResult'>
    {filteredData.map((value, key)=>{
        return (<a className='dataItem' href={value.link} target='_blank'><p>{value.title}</p></a> );

    })}
</div> )
}
    </div>
  ); }
export default SearchBar