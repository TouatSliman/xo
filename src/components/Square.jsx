import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="square w-20 h-20 m-1 bg-slate-50 font-bold text-[1.7rem]"
      onClick={onSquareClick}
    >
      {value ? value : "?"}
    </button>
  );
}
