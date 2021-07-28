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
  EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />  
      </Banner> 
     
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Xofanna Anraku</h1>
        <h2>@xofanna</h2>

        <p>
          Streamer at <a href="https://www.twitch.tv/gianraku/videos">Twitch.tv</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, 
            Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 de novembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>89</strong>
          </span>
          <span> 
            <strong>90 </strong> seguidores
          </span>
        </Followage>  
      </ProfileData>

    <Feed />

    </Container>
  );
}

export default ProfilePage;