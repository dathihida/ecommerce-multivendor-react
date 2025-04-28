// components/SearchBar.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // thêm dòng này
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onKeyDown }) => {
    return (
      <TextField
        fullWidth
        autoFocus
        placeholder="Tìm kiếm..."
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} // gắn vào đây
      />
    );
  };
  
export default SearchBar;
