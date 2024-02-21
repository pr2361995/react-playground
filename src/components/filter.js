import React from 'react'

export const Filter = (props) => {

  const {restroName,filerRestro} = props;
  
  return (
    <div className='flex gap-2 items-center'>
        <input 
            type="text"
            placeholder="search"
            className="mx-4 mt-2 px-4 py-1 rounded-md border-2 bg-white focus:outline-none"
            value={restroName}
            onChange={(e)=> filerRestro(e.target.value)}></input>
        <button 
            className='px-4 py-1 rounded-md hover:bg-rose-700 text-white bg-rose-500'
            onClick={() => {}}>Top Rated Restaurant</button>
    </div>
  )
}
