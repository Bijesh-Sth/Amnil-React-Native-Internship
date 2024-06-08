# Day 5

## What should be the naming convention while createing a project (React Native)?

- Use PascalCase for project name
- avoid using special characters

## What is the difference between `npm` and `npx`?

- `npm` is a package manager for Node.js packages, or modules
- `npx` is a tool for executing Node packages

## What is the difference between `npm` and `yarn`?

- `npm` and `yarn` are both package managers
- `yarn` is faster than `npm`
- `yarn` installs packages in parallel
- `npm` is the default package manager for Node.js

## Where is reeact native app registered into?

= index.js

## What is the entry point of a react native app?

- index.js

## What is the difference between `react-native` and `react-native-cli`?

- `react-native` is a package that contains the core functionality of React Native
- `react-native-cli` is a package that provides a command line interface for creating and managing React Native projects

## React Native Elements

- React Native Elements is a cross-platform UI toolkit for React Native
- It provides a set of reusable components that can be used to build user interfaces

  | React Native         | React      | Example Usage                                                                                                                                                                                  |
  | -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `<View>`             | `<div>`    | <View style={{ flex: 1, justifyContent: 'center' }}></View>                                                                                                                                    |
  | `<Text>`             | `<p>`      | <Text style={{ fontSize: 18 }}>Hello World</Text>                                                                                                                                              |
  | `<Image>`            | `<img>`    | <Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 100, height: 100 }} />                                                                                                |
  | `<TextInput>`        | `<input>`  | <TextInput placeholder="Enter text" style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />                                                                                             |
  | `<FlatList>`         | `<ul>`     | <FlatList data={[{ key: 'Item 1' }, { key: 'Item 2' }]} renderItem={({ item }) => <Text>{item.key}</Text>} />                                                                                  |
  | `<SectionList>`      | `<ul>`     | <SectionList sections={[{ title: 'Title', data: ['Item 1', 'Item 2'] }]} renderItem={({ item }) => <Text>{item}</Text>} renderSectionHeader={({ section }) => <Text>{section.title}</Text>} /> |
  | `<TouchableOpacity>` | `<button>` | <TouchableOpacity onPress={() => alert('Button pressed!')}><Text>Press Me</Text></TouchableOpacity>                                                                                            |

## What is the difference between `inline Stylesheet` and `Stylesheet.create`?

- Inline Stylesheet: Styles are defined directly in the component
- Stylesheet.create: Styles are defined in a separate file and imported into the component
- Stylesheet.create is more efficient as it allows for better separation of concerns

example:

```jsx
// Inline Stylesheet
<View style={{ backgroundColor: 'red', padding: 10 }}>
  <Text style={{ color: 'white' }}>Hello World</Text>

// Stylesheet.create

import { StyleSheet } from 'react-native';

<View style={styles.container}>
<Text style={styles.text}>hello</Text>
</View>
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
```



