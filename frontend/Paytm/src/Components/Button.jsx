import React from 'react';

export function Button(props) {
  return (
      <button className="bg-black text-white text-xl p-3 font-bold rounded text-center cursor-pointer my-2.5 h-14 w-full" type="submit" >{props.redirect}</button>
  );
}
