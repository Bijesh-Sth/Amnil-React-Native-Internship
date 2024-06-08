#Library vs Framework

- **Library**
  -is a collection of functions and methods that allows you to perform many actions without writing your code.
  -The developer calls the library when needed.
  -for eg: React, jQuery etc

- **Framework**
- is a collection of libraries that helps you to develop your application. these includes set of rules and guidelines that you need to follow.
- framework is a combination of libraries, compilers, and tools that help you to develop your application.
- in case of react native, it is a framework that uses react library to develop mobile applications. the compiler is babel and the tool is expo.

- **Difference**

  - In a library, you are in charge of the flow of the application. You are free to call the library whenever you want to perform a specific task.
  - When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

- **Expo**
  - Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

#Native vs hybrid vs web apps

- **Native Apps**

  - Native apps are developed for a specific platform or device. These apps are written in languages that the platform accepts, such as Objective-C or Swift for iOS and Java for Android.
  - Native apps are built using the software development tools and languages provided by the platform owner and running directly on the operating system of the device such as iOS or Android.
  - Native apps are faster and more reliable in terms of performance. They have access to the device’s hardware and software, which allows them to take full advantage of the device’s capabilities.
  - Native apps are distributed through app stores like Apple App Store and Google Play Store.

- **Hybrid Apps**

  - Hybrid apps are a combination of native and web apps. They are built using web technologies like HTML, CSS, and JavaScript and then wrapped in a native container that allows them to run on multiple platforms.
  - Hybrid apps are developed using web technologies like HTML, CSS, and JavaScript. They are then wrapped in a native container that allows them to run on multiple platforms.
  - Hybrid apps are easier and faster to develop than native apps because they can be built using web technologies that are familiar to many developers.
  - Hybrid apps can be distributed through app stores like native apps, but they may not perform as well as native apps because they are running in a web view.

- **Web Apps**
  - Web apps are applications that are accessed through a web browser over the internet. They are written using web technologies like HTML, CSS, and JavaScript.
  - Web apps are platform-independent and can run on any device with a web browser, regardless of the operating system.
  - Web apps are easier to develop and maintain than native or hybrid apps because they are built using web technologies that are familiar to many developers.
  - Web apps can be accessed through a URL and do not need to be downloaded or installed from an app store.

-**key differences**
-Performance: Native apps typically offer superior performance and responsiveness compared to hybrid apps.

-Development Time and Cost: Hybrid apps can be more cost-effective and quicker to develop due to a shared codebase for multiple platforms.

-User Experience: Native apps provide a more refined and seamless user experience by adhering closely to platform-specific design guidelines.

-Access to Native Features: Native apps have direct access to all platform-specific features, whereas hybrid apps may need additional tools or plugins for the same access.

-Maintenance: Hybrid apps benefit from easier maintenance with a single codebase, while native apps require separate maintenance efforts for each platform.

#**JavaScript method that directly modifies array**

- **Mutator methods** are the methods that directly modify the original array. They are also known as destructive methods because they change the original array. Some of the commonly used mutator methods are:

  - push(): Adds one or more elements to the end of an array and returns the new length of the array.
  - pop(): Removes the last element from an array and returns that element.
  - shift(): Removes the first element from an array and returns that element.
  - unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
  - splice(): Adds or removes elements from an array at a specified index and returns the removed elements.
  - sort(): Sorts the elements of an array in place and returns the sorted array.
  - reverse(): Reverses the order of the elements in an array in place and returns the reversed array.

  #**Functional Vs Class Programming**

  - **Functional Programming**
    Core concepts of functional programming include:
    - Pure functions: Functions that always produce the same output for the same input and have no side effects.
    - Immutability: Data that cannot be changed once it is created.
    - Higher-order functions: Functions that take other functions as arguments or return functions as results.
    - Recursion: A technique where a function calls itself to solve smaller instances of the same problem.
    - Declarative programming: Describing what should be done rather than how it should be done.
      -Higher-order functions: Functions that take other functions as arguments or return functions as results.
      -for eg: map(), filter(), reduce() etc
      -const double = (x) => x \* 2;

  -**Class Programming**
  Core concepts of class-based programming include: - Classes: Blueprints for creating objects with properties and methods. - Inheritance: The ability of a class to inherit properties and methods from another class. - Encapsulation: The bundling of data and methods that operate on the data into a single unit. - Polymorphism: The ability of a class to provide different implementations of methods based on the input arguments. - Abstraction: The process of hiding the implementation details of a class and only exposing the necessary information to the outside world.
  -for eg: class Person { constructor(name) { this.name = name; } greet() { return `Hello, ${this.name}!`; } }

  -**Difference** -**State Management:**

        Functional Programming: Avoids mutable state and side effects.
        Class-Based Programming: Uses mutable state encapsulated within objects.

        -**Function vs Method:**
        Functional Programming: Functions are the primary building blocks.
        Class-Based Programming: Methods (functions attached to objects) are the primary building blocks.

        -**Code Organization:**
        Functional Programming: Code is organized around functions.
        Class-Based Programming: Code is organized around objects and classes.

        **Reusability and Modularity:**
        Functional Programming: Achieved through higher-order functions and composition.
        Class-Based Programming: Achieved through inheritance and polymorphism.

**React vs React Native**
React:
Purpose: React is a JavaScript library for building user interfaces, primarily for web applications.

Platform: Web browsers.

Rendering: React uses a virtual DOM to efficiently update the web page in response to data changes. The virtual DOM diffing algorithm helps in minimizing the number of costly DOM operations.

Components: React components are primarily web-based components like <div>, <span>, and other HTML elements.

Styling: CSS is used for styling components. Styles can be applied using traditional CSS, CSS-in-JS libraries, or other styling frameworks like Sass or LESS.

For eg:
import React from 'react';
import ReactDOM from 'react-dom';

            function App() {
            return <h1>Hello, world!</h1>;
            }

            ReactDOM.render(<App />, document.getElementById('root'));

React Native:
Purpose: React Native is a framework for building mobile applications that can run on both iOS and Android platforms.
Platform: Mobile devices (iOS and Android).

Rendering: React Native does not use a virtual DOM. Instead, it uses native APIs to render components directly to the mobile platform’s native UI elements.

Components: React Native components are mobile-specific and map to native UI components. Examples include <View>, <Text>, and <ScrollView>.

Styling: Styles in React Native are written using a CSS-like syntax, but they are applied through JavaScript objects. React Native uses a StyleSheet object for styling.

For eg:

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function App() {
return (
<View style={styles.container}>
<Text>Hello, world!</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});

export default App;
