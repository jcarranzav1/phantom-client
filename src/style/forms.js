import styled from '@emotion/styled';

export const FormTitle = styled.h3`
  font-family: 'Open Sans';
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-transform: none;
  white-space: normal;
`;

export const FormSubtitle = styled.small`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 600;
  color: rgb(55, 63, 80);
  text-align: center;
  margin-bottom: 36px;
  display: block;
  text-transform: none;
  white-space: normal;
`;

export const LabelForm = styled.small`
  font-size: 13px;
  line-height: 1.5;
  display: block;
  margin-bottom: 8px;
  text-align: left;
  font-weight: 700;
  color: rgb(75, 86, 107);
  text-transform: none;
  white-space: normal;
`;

export const FormControl = styled.div`
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
  width: 100%;
  & .focusBorder {
    border: 2px solid #d23f57 !important;
  }
`;

export const InputWrapper = styled.div`
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.4375em;
  color: rgb(43, 52, 69);
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  align-items: center;
  width: 100%;
  position: relative;
  border-radius: 5px;
  height: 44px;
  border: 1px solid #c4c4c4;
  &:hover {
    border: 1px solid #2b3445;
  }
`;

export const InputForm = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 8.5px 14px;
  box-shadow: none;
  border-radius: 5px;
`;

export const ErrorMessage = styled.p`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 0.78rem;
  line-height: 1.66;
  text-align: left;
  margin: 4px 14px 0px;
  color: rgb(233, 69, 96);
`;

export const AccountOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-size: 15px;
`;
export const AccountOption = styled.h6`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 8px;
  border-bottom: 1px solid rgb(43, 52, 69);
  border-top-color: rgb(43, 52, 69);
  border-right-color: rgb(43, 52, 69);
  border-left-color: rgb(43, 52, 69);
  text-transform: none;
  white-space: normal;
`;

export const EyeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 5px;
  font-size: 1.125rem;
`;
