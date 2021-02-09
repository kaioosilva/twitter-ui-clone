import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Maybe you like it"
            elements={[
              <FollowSuggestion name="Ramon Roledo" nickname="ramontoledo" />,
              <FollowSuggestion name="Regina Braum" nickname="reginabraum" />,
              <FollowSuggestion name="Diego Azevedo" nickname="diegoazevedo" />,
            ]}
          />

          <List
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
