import styled from 'styled-components';
import Variables from 'base/variables';
import { ChevronIcon } from './icon';

export const MenuList = styled.div`
  border: 1px solid ${Variables.Colors.colorPrimaryGrey};
  border-top: none;
  display: flex;
  gap: 5px;
`;

export const ListGroup = styled.div`
  width: 100%;  
`;

export const MenuItem = styled.div`
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  &:hover {
    background-color: ${Variables.Colors.colorPrimaryGreyHover};
  }  
`;

export const ItemLabel = styled.span``;
export const NestedIcon = styled(ChevronIcon)`
  transform: rotate(-90deg);
  color: ${Variables.Colors.colorPrimaryGrey};
`;