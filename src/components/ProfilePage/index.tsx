import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Kaio Oliveira Silva</h1>
        <h2>@kaioo_silva</h2>

        <p>
          Developer at <a href="https://www.kaiodev.com">@Kaiodev</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Dublin, ireland
          </li>
          <li>
            <CakeIcon />
            Birthday: 22nd November
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>94</strong>
          </span>
          <span>
            <strong> 672 </strong> followed
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
