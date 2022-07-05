import React, { useState } from 'react';
import { Option } from './models';
import { MenuList } from './menu/menu';
import * as S from './select.styles';

const DEFAULT_PLACEHOLDER = "Choose...";

type SelectProps = {
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  selectedOption: Option | null;
  onSelect(option: Option): void;
};

export const Select: React.FC<SelectProps> = ({ 
  options, 
  onSelect,
  selectedOption, 
  placeholder = DEFAULT_PLACEHOLDER 
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleSelect = (option: Option) => {
    onSelect(option);

    // close the menu
    setOpen(false);
  }

  return (
    <div>
      <S.ToggleButton onClick={toggleMenu}>
        {selectedOption 
          ? <S.SelectedOption>{selectedOption.label}</S.SelectedOption> 
          : <S.Placeholder>{placeholder}</S.Placeholder>}
        <S.ToggleIcon open={open}/>
      </S.ToggleButton>
      {open && <MenuList options={options} onSelect={handleSelect} />}
    </div>
  );
}