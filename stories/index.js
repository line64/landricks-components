import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  LandingCanvas,
  TitleBrick,
  FeatureListBrick,
  FooterBrick
} from '../src';

storiesOf('Getting Started', module)
  .add('Sample Landing', () => (
    <LandingCanvas>
      <TitleBrick
        title="The best mobile app of all times!"
        subtitle="An app so revolutionary, that it will blow your mind away and make you forget about all other apps in your phone."
      />
      <FeatureListBrick
        title="My App Features"
        subtitle="Batteries not included"
        items={[
          { key: 1, icon: 'rocket', title: 'virtual reality', description: 'fancy tech titles to get your attention'},
          { key: 2, icon: 'rocket', title: 'big data', description: 'fancy tech titles to get your attention'},
          { key: 3, icon: 'rocket', title: 'internet of things', description: 'fancy tech titles to get your attention'}
        ]}
      />
      <FeatureListBrick
        title="More Features"
        subtitle="Just to show a different band style"
        items={[
          { key: 1, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
          { key: 2, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
          { key: 3, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
          { key: 4, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
          { key: 5, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
          { key: 6, title: 'no more ideas', description: 'enough dummy text, using ctrl+c from this point on'},
        ]}
      />
      <TitleBrick
        title="It's time to click my button!"
        subtitle="Now that you've read everything you need to know, make my conversion funnel happy and click this CTA"
      />
      <FooterBrick
        productName="Best Product Event"
        copyRight={ true }
        social={[
          { key: 1, icon: 'facebook', link: 'http://wwww.facebook.com' },
          { key: 2, icon: 'instagram', link: 'http://wwww.instagram.com' },
          { key: 3, icon: 'twitter', link: 'http://wwww.twitter.com' }
        ]}
      />
    </LandingCanvas>
  ));
