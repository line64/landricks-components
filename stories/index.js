import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {
  LandingCanvas,
  ContextPropagator,
  GenericBrick,
  DoubleContentBrick,
  StrongMessageBrick,
  EnumerationBrick,
  EmailSqueezeBrick,
  FooterBrick,
  CallToAction,
  FeatureItem,
  PlaceHolder
} from '../src';

const BASE_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '18px'
}

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  //backgroundImage: require('./sample_bai.jpg')
  backgroundColor: '#71A2B6',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#71A2B6',
  objectDesign: 'square-solid'
}

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#29D9C2',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#000000',
  secondaryColor: '#C99DA3',
  objectDesign: 'square-outline'
};

const LIGHT_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#FAFAFA',
  textColor: '#888888',
  primaryColor: '#996888',
  secondaryColor: '#C99DA3'
};

storiesOf('Showcase', module)
  .addWithInfo('Dummy Landing', () => (
    <LandingCanvas>
      <StrongMessageBrick
        theme={ HEADER_BAND_THEME }
        messageLevel1="A beautiful message, but not so long"
        messageLevel2="A related but not so important concept, that usually is a little bit longer than the previous"
        CTAs={ <CallToAction label="sign up" /> }
      />
      <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
        <ContextPropagator>
          <h1>Our product highlight</h1>
          <p>you wont find a better product anywhere in the universe.</p>
          <CallToAction label="buy" /><CallToAction label="learn more" />
        </ContextPropagator>
        <PlaceHolder />
      </DoubleContentBrick>
      <GenericBrick
        theme={ LIGHT_BAND_THEME }
        title="Yes, we can!"
        subtitle="if you think you can do it"
        contentStyle={ {textAlign: 'center'} }
      >
        <PlaceHolder />
      </GenericBrick>
      <EnumerationBrick
        theme={ HEAVY_BAND_THEME }
        title="Awesome features"
        subtitle="You can add any number of them">
        <FeatureItem
          icon="rocket"
          title="Feature 1"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 2"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 3"
          description="bla bla bla bla bla"
        />
      </EnumerationBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder useLoremIpsum={ true } />
        <PlaceHolder label="image placeholder" />
      </DoubleContentBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder label="image placeholder" />
        <PlaceHolder useLoremIpsum={ true } />
      </DoubleContentBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder useLoremIpsum={ true } />
        <PlaceHolder label="image placeholder" />
      </DoubleContentBrick>
      <EmailSqueezeBrick
        title="Join our Newsletter"
        subtitle="To get updates about what we want you to know about"
        theme={ HEAVY_BAND_THEME }
        buttonLabel="Join"
        placeholder="Enter your email"
      />
    </LandingCanvas>
  ), { inline: true });

storiesOf('Layout Bricks', module)
  .addWithInfo('Generic Brick', () => (
    <GenericBrick
      theme={ HEAVY_BAND_THEME }
      title="Yes, we can!"
      subtitle="if you think you can do it">
      <PlaceHolder />
    </GenericBrick>
  ), { inline: true })
  .addWithInfo('Generic With Background', () => (
    <GenericBrick
      theme={ HEAVY_BAND_THEME }
      title="Yes, we can!"
      subtitle="if you think you can do it"
      backgroundImage={ require('./sample_bai.jpg') }>
      <PlaceHolder />
    </GenericBrick>
  ), { inline: true })
  .addWithInfo('Double Content Brick', () => (
    <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
      <PlaceHolder />
      <PlaceHolder />
    </DoubleContentBrick>
  ), { inline: true })
  .add('Double Content with some info', () => (
    <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
      <ContextPropagator>
        <h1>Our product highlight</h1>
        <p>you wont find a better product anywhere in the universe.</p>
        <CallToAction label="buy" /><CallToAction label="learn more" />
      </ContextPropagator>
      <PlaceHolder />
    </DoubleContentBrick>
  ))
  .addWithInfo('Enumeration Brick', () => (
    <LandingCanvas>
      <EnumerationBrick
        theme={ HEAVY_BAND_THEME }
        title="Awesome features"
        subtitle="You can add any number of them">
        <FeatureItem
          icon="rocket"
          title="Feature 1"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 2"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 3"
          description="bla bla bla bla bla"
        />
      </EnumerationBrick>
    </LandingCanvas>
  ), { inline: true });

storiesOf('Task Oriented Bricks', module)
  .add('Strong Message Brick', () => (
    <LandingCanvas >
      <StrongMessageBrick
        theme={ HEAVY_BAND_THEME }
        messageLevel1="Yes, we can!"
        messageLevel2="A related but not so important concept"
        backgroundImage={ require('./sample_bai.jpg') }
        CTAs={ [(<CallToAction label="Yes" />), (<CallToAction label="No" />)] }
      />
    </LandingCanvas>
  ))
  .add('Email Squeeze Brick', () => (
    <LandingCanvas>
      <EmailSqueezeBrick
        title="Join our Newsletter"
        subtitle="To get updates about what we want you to know about"
        theme={ HEAVY_BAND_THEME }
        buttonLabel="Join"
        placeholder="Enter your email, mua ja ja"
      />
    </LandingCanvas>
  ));

storiesOf('Sub-Brick Fragments', module)
  .add('Call to Action', () => (
    <LandingCanvas>
      <GenericBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
        <CallToAction
          icon="rocket"
          label="BUTTON CTA!"
        />
        <CallToAction
          icon="rocket"
          label="BUTTON CTA 2!"
        />
        <CallToAction
          icon="rocket"
          label="LINK CTA!"
          href="http://landricks.io"
        />
      </GenericBrick>
    </LandingCanvas>
  ))
  .add('Feature Item', () => (
    <LandingCanvas>
      <EnumerationBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="BUTTON CTA!"
          description="bla bla bla bla bla"
        />
      </EnumerationBrick>
    </LandingCanvas>
  ));
