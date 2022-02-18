import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  border: ${(props) => (props.outline ? '1px solid rgb(210, 63, 87)' : 'none')};
  margin: 0px 0px 1.65rem;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: 'Open Sans';
  font-size: 0.875rem;
  line-height: 1.75;
  padding: ${(props) => (props.large ? '6px 16px' : '6px 28px')};
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${(props) => (props.outline ? 'rgb(210, 63, 87)' : 'rgb(255, 255, 255)')};
  background-color: ${(props) => (props.outline ? 'rgb(255, 255, 255)' : 'rgb(210, 63, 87)')};
  box-shadow: rgba(43, 52, 69, 0.1) 0px 4px 16px;
  width: ${(props) => (props.large ? '100%' : 'auto')};
  font-weight: 600;
  text-transform: capitalize;
  min-width: 0px;
  min-height: 0px;
  height: 44px;
  &:hover {
    text-decoration: none;
    background-color: ${(props) => (props.outline ? 'rgba(210, 63, 87, 0.1)' : 'rgb(227, 44, 78)')};
    box-shadow: rgba(3, 0, 71, 0.1) 0px 0px 28px;
  }
`;
