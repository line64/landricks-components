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
12. ThemePropagator

# Expected Props

### LandingCanvas
* theme: LandricksPropTypes.brickTheme,
* children: PropTypes.arrayOf(PropTypes.element)

### DoubleContentBrick
* hasHeader: PropTypes.bool,
* title: PropTypes.string,
* subtitle: PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: PropTypes.object,
* contentStyle: PropTypes.object,
* headerStyle: PropTypes.object,
* titleStyle: PropTypes.object,
* subtitleStyle: PropTypes.object,
* renderHeader: PropTypes.func,
* children: PropTypes.arrayOf(PropTypes.element)

### EmailSqueezeBrick
* buttonLabel: PropTypes.string,
* placeholder: PropTypes.string
* title: PropTypes.string
* subtitle: PropTypes.string
* theme: LandricksPropTypes.brickTheme
* smallText: PropTypes.string
* contentStyle: PropTypes.object,
* titleStyle: PropTypes.object
* subtitleStyle: PropTypes.object
* buttonStyle: PropTypes.object
* inputStyle: PropTypes.object
* smallStyle: PropTypes.object
* onSubmit: PropTypes.func

### EnumerationBrick
* hasHeader: PropTypes.bool,
* title: PropTypes.string,
* subtitle: PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: PropTypes.object,
* contentStyle: PropTypes.object,
* headerStyle: PropTypes.object,
* titleStyle: PropTypes.object,
* subtitleStyle: PropTypes.object,
* renderHeader: PropTypes.func,
* children: PropTypes.arrayOf(PropTypes.element)
* theme: LandricksPropTypes.brickTheme

### FeatureItem
* icon: PropTypes.string,
* image: PropTypes.string,
* title: PropTypes.string,
* description: PropTypes.string

### FooterBrick
* withColumns: PropTypes.bool
* simple: PropTypes.bool
* theme: LandricksPropTypes.brickTheme
* logo: PropTypes.string
* itemsColumn1: PropTypes.arrayOf({
    icon: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
  })
* itemsColumn2: PropTypes.arrayOf({
    icon: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
  })
* itemsColumn3: PropTypes.arrayOf({
    icon: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
})

### GenericBrick
* hasHeader: PropTypes.bool,
* title: PropTypes.string,
* subtitle: PropTypes.string,
* theme: LandricksPropTypes.brickTheme,
* wrapperStyle: PropTypes.object,
* contentStyle: PropTypes.object,
* headerStyle: PropTypes.object,
* titleStyle: PropTypes.object,
* subtitleStyle: PropTypes.object,
* renderContent: PropTypes.func,
* renderHeader: PropTypes.func
* children: PropTypes.arrayOf(PropTypes.element)

### NavigationBrick
* brand: PropTypes.string
* logo: PropTypes.string
* items: PropTypes.arrayOf({
    label: PropTypes.string,
    onClick: PropTypes.func,
    highlight: PropTypes.bool
})

### PlaceHolder
* wrapperStyle: PropTypes.object,
* label: PropTypes.string,
* useLoremIpsum: PropTypes.bool

### StrongMessageBrick
* messageLevel1: PropTypes.string.isRequired,
* messageLevel2: PropTypes.string
* messageLevel1Style: PropTypes.object
* messageLevel2Style: PropTypes.object,
* contentStyle: PropTypes.object,
* theme: LandricksPropTypes.brickTheme
* CTAs: PropTypes.arrayOf(LandricksPropsTypes.CallToAction)
* renderCTAs: PropTypes.func

### CallToAction
* href: PropTypes.string,
* target: PropTypes.string,
* icon: PropTypes.string,
* label: PropTypes.string,
* onClick: PropTypes.func
* theme: LandricksPropTypes.brickTheme

### ThemePropagator
* wrapperStyle: PropTypes.object
* children: PropTypes.arrayOf(PropTypes.element)


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
