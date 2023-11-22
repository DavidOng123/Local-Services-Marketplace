import React from "react";

const FilterBox = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="flex justify-between items-center mb-4">
          <select className="mr-4 px-2 py-1 border border-gray-300 rounded w-[150px]">
            <option value="filter1">Plumbing</option>
            <option value="filter2">Electrician</option>
          </select>
        </div>
      );
};

export default FilterBox;
