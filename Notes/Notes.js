//Interface vs Types

// Interface
// - Interface is used to define the structure of an object.
// - This is done by describing what properties and methods an object should have.
// - Interfaces can be extended or implemented by other interfaces.
//for eg:
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Types
// - Types are used to define custom types.
// - This is done by describing the structure of an object.
// - Types can be used to define union types, intersection types, and more.
//for eg:

type Person = {
  name: string,
  age: number,
  greet(): void,
};

//when to use interface and when to use types
// Use interface when you want to define a shape and implement it in multiple classes.
// Use types when you want to define a custom type and use it in multiple places.

//ScrollEventThrottle

// ScrollEventThrottle is a technique used to throttle the scroll event in JavaScript.
// it is used with ScrollViews to improve performance by reducing the number of scroll events that are fired.
// This is done by setting a time interval between scroll events.

//for eg:
<ScrollView scrollEventThrottle={16} onScroll={handleScroll}>
  {/* Scrollable content */}
</ScrollView>;

//this sets scroll event throttle to 16 milliseconds, which means that the onScroll event will be fired every 16 milliseconds.

//Throttle value for
// 60fps, the throttle value should be set to 16 milliseconds.
// 90fps, the throttle value should be set to 11 milliseconds.
// 120fps, the throttle value should be set to 8 milliseconds.

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setComments(data);
  };
  fetchData();
}, []);
//with try catch

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);


//post
// //{
//   "title": "foo",
//   "body": "bar",
//   "userId": "1"
// }

//url https://jsonplaceholder.typicode.com/posts

//fetch post request

const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

  //using try catch

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
  
