import React from 'react';
import { userProfileIndex } from '../../data/ProfileIndexData';
import { ProfileContainer, ProfileFlex, ProfileWrapper } from '../../style/profileContainer';
import ProfileIndex from './ProfileIndex';

export default function UserProfile({ children }) {
  return (
    <ProfileContainer>
      <ProfileFlex>
        <ProfileIndex settingArray={userProfileIndex} />
        <ProfileWrapper>{children}</ProfileWrapper>
      </ProfileFlex>
    </ProfileContainer>
  );
}
