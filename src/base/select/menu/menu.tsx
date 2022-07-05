import { useCallback, useState } from 'react';
import { Option } from '../models';
import * as S from './menu.styles';

type MenuListProps = {
  options: Option[],
  onSelect(option: Option): void;
}

export const MenuList: React.FC<MenuListProps> = ({ options, onSelect }) => {
  const handleOptionSelect = (option: Option) => {
    if (option.onLoadOptions) {
      return;
    }

    onSelect(option);
  };
  
  return (
    <S.MenuList>
      <S.ListGroup>
        {options.map(el => (
          <MenuItem option={el} 
                    onSelect={handleOptionSelect} 
                    key={el.id} /> 
        ))}
      </S.ListGroup>
    </S.MenuList>
  )
}


type MenuItemProps = {
  option: Option;
  onSelect(option: Option): void;
}

const MenuItem: React.FC<MenuItemProps> = ({ onSelect, option }) => {
  const handleSelect = useCallback(() => {
    onSelect(option);
  }, [option]);
  
  return (
    <S.MenuItem onClick={handleSelect}>
      <S.ItemLabel>{option.label}</S.ItemLabel>
      <S.NestedIcon />
    </S.MenuItem>
  )
}