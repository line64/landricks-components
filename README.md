# Landricks: Landing-Bricks
A set of React components to build structured landing pages

## Introduction
Have you ever built a product landing page? They are all the same, they have a big banner on top, some call-to-action buttons, a list of features, some quotes from customers, pricing options, etc. Most of the time, these elements are displayed as horizontal bands, laid out vertically. Design varies a lot, but it can often be defined as a result of basic rules (font, primary/secondary color, background) that apply differently to each band.

## Goal
Landricks provide a set of opinionated React DOM-components that can be laid out as bricks, one on top of the other, to easily obtain a fully formatted landing page. The props of each component are used to set the actual content (text, images, urls) presented to the user. Visual design can be defined by providing a "theme", which is a set of high-level properties which are used by each component to build their internal styles.

## Demo
The simplest way to get a glance of the components is to use "react storybook". You can either clone the repo and run `npm run storybook`, or you can browse the online [Storybook Workspace](https://99414fdf-a9e6-4eed-85ce-422542fe1672.sbook.io) which renders directly from the master branch code.

## Getting Started

**Create a React web app**

Use *react-scripts* to create a web app called *quick-landing-page* (if you don't like react-scripts, use whatever procedure you prefer):

    create-react-app quick-landing-page

**Add Landricks dependency**

Inside the dir of your fresh new app, run npm to add the required dependency:

    npm install --save landricks-components

**Import components**

Add the following import statement to src/App.js

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
    } from 'landricks-components';

**Define themes to be used by different bricks**

Add the following constants to your src/App.js

    const BASE_THEME = {
      fontFamily: 'Lato',
      baseFontSize: '18px'
    }

    const HEADER_BAND_THEME = {
      ...BASE_THEME,
      baseFontSize: '18px',
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

**Add a LandingCanvas component**

Replace the current render method of src/App.js for this one:

    render() {
      return (
        <LandingCanvas>
        </LandingCanvas>
      );
    }

**Add some Bricks to the canvas**

Add these components as children of the LandingCanvas:

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
      contentStyle={ {textAlign: 'center'} }>
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

**Run your app**

Use npm start script to start your app:

    npm start
