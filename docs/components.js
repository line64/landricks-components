# Available Landricks: 

1. LandingCanvas
2. DoubleContentBrick
3. EmailSqueezeBrick
4. EnumerationBrick
5. FeatureItem
6. FooterBrick
7. GenericBrick
8. NavigationBrick
9. PlaceHolder
10. StrongMessageBrick
11. CallToAction
12. ContextPropagator

# Expected Props

### LandingCanvas
* theme: LandricksPropTypes.brickTheme,
* children: React.PropTypes.arrayOf(React.PropTypes.element)

### DoubleContentBrick
* hasHeader: React.PropTypes.bool,
* title: React.PropTypes.string,
* subtitle: React.PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: React.PropTypes.object,
* contentStyle: React.PropTypes.object,
* headerStyle: React.PropTypes.object,
* titleStyle: React.PropTypes.object,
* subtitleStyle: React.PropTypes.object,
* renderHeader: React.PropTypes.func,
* children: React.PropTypes.arrayOf(React.PropTypes.element)

### EmailSqueezeBrick
* buttonLabel: React.PropTypes.string,
* placeholder: React.PropTypes.string
* title: React.PropTypes.string
* subtitle: React.PropTypes.string
* theme: LandricksPropTypes.brickTheme
* smallText: React.PropTypes.string
* contentStyle: React.PropTypes.object,
* titleStyle: React.PropTypes.object
* subtitleStyle: React.PropTypes.object
* buttonStyle: React.PropTypes.object
* inputStyle: React.PropTypes.object
* smallStyle: React.PropTypes.object
* onSubmit: React.PropTypes.func

### EnumerationBrick
* hasHeader: React.PropTypes.bool,
* title: React.PropTypes.string,
* subtitle: React.PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: React.PropTypes.object,
* contentStyle: React.PropTypes.object,
* headerStyle: React.PropTypes.object,
* titleStyle: React.PropTypes.object,
* subtitleStyle: React.PropTypes.object,
* renderHeader: React.PropTypes.func,
* children: React.PropTypes.arrayOf(React.PropTypes.element)
* theme: LandricksPropTypes.brickTheme
 
### FeatureItem
* icon: React.PropTypes.string,
* image: React.PropTypes.string,
* title: React.PropTypes.string,
* description: React.PropTypes.string

### FooterBrick
* withColumns: React.PropTypes.bool
* simple: React.PropTypes.bool
* theme: LandricksPropTypes.brickTheme
* logo: React.PropTypes.string
* itemsColumn1: React.PropTypes.arrayOf({
    icon: React.PropTypes.string,
    link: React.PropTypes.string,
    text: React.PropTypes.string
  })
* itemsColumn2: React.PropTypes.arrayOf({
    icon: React.PropTypes.string,
    link: React.PropTypes.string,
    text: React.PropTypes.string
  })
* itemsColumn3: React.PropTypes.arrayOf({
    icon: React.PropTypes.string,
    link: React.PropTypes.string,
    text: React.PropTypes.string
})

### GenericBrick
* hasHeader: React.PropTypes.bool,
* title: React.PropTypes.string,
* subtitle: React.PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: React.PropTypes.object,
* contentStyle: React.PropTypes.object,
* headerStyle: React.PropTypes.object,
* titleStyle: React.PropTypes.object,
* subtitleStyle: React.PropTypes.object,
* renderContent: React.PropTypes.func,
* renderHeader: React.PropTypes.func
* children: React.PropTypes.arrayOf(React.PropTypes.element)

### NavigationBrick 
* brand: React.PropTypes.string
* logo: React.PropTypes.string
* items: React.PropTypes.arrayOf({ 
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    highlight: React.PropTypes.bool
})

### PlaceHolder
* wrapperStyle: React.PropTypes.object,
* label: React.PropTypes.string,
* useLoremIpsum: React.PropTypes.bool

### StrongMessageBrick
* messageLevel1: React.PropTypes.string.isRequired,
* messageLevel2: React.PropTypes.string
* messageLevel1Style: React.PropTypes.object
* messageLevel2Style: React.PropTypes.object,
* contentStyle: React.PropTypes.object,
* theme: LandricksPropTypes.brickTheme
* CTAs: React.PropTypes.arrayOf(LandricksPropsTypes.CallToAction)
* renderCTAs: React.PropTypes.func

### CallToAction
* href: React.PropTypes.string,
* target: React.PropTypes.string,
* icon: React.PropTypes.string,
* label: React.PropTypes.string,
* onClick: React.PropTypes.func
* theme: LandricksPropTypes.brickTheme

### ContextPropagator
* wrapperStyle: React.PropTypes.object
* children: React.PropTypes.arrayOf(React.PropTypes.element)


# Default Theme
```
DEFAULT_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '20px',
  backgroundColor: '#4051B5',
  primaryColor: '#E91C63',
  textColor: '#FFFFFF'
};
```

