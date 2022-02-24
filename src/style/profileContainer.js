import styled from '@emotion/styled';
import { maxWidth, minWidth } from './responsive';

export const ProfileContainer = styled.div`
  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ProfileFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
  ${maxWidth(960, {
    flexDirection: 'column',
  })}
`;

export const ProfileWrapper = styled.div`
  ${minWidth(960, {
    flexBasis: '75%',
    flexGrow: 0,
    maxWidth: '75%',
  })}

  padding-left: 24px;
  padding-top: 24px;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
`;
