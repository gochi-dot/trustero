import styled from 'styled-components';
import { ChevronIcon } from './icon';
import Variables from 'base/variables';

export const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${Variables.Colors.colorPrimaryGrey};
  color: ${Variables.Colors.colorPrimaryGrey};
  cursor: pointer;
  padding: 4px 8px;
  min-width: 100px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  min-width: 200px;
`;

export const ToggleIcon = styled(ChevronIcon)<{open: boolean}>`
  transform: ${({open}) => open ? 'rotate(180deg)' : undefined};
`;

export const Placeholder = styled.span`
  color: ${Variables.Colors.colorPrimaryGrey};  
`;
export const SelectedOption = styled.span`
  color: ${Variables.Colors.colorPrimaryBlack};  
`;