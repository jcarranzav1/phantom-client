import React from 'react';
import { adminProfileIndex } from '../../data/ProfileIndexData';
import { ProfileContainer, ProfileFlex, ProfileWrapper } from '../../style/profileContainer';
import ProfileIndex from './ProfileIndex';

export default function AdminProfile({ children }) {
  return (
    <ProfileContainer>
      <ProfileFlex>
        <ProfileIndex settingArray={adminProfileIndex} />
        <ProfileWrapper>{children}</ProfileWrapper>
      </ProfileFlex>
    </ProfileContainer>
  );
}
