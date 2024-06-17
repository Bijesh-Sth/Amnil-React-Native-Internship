// async function postData(){
// const postData = {
//   userId: "1",
//   title: "foo",
//   body: "bar",
// };

// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(postData),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
// }

// postData();

const documents = ["Bus Car Train", "Train Plane Car", "Bus Bus Plane"];

// Map function
function mapFunction(document) {
  return document.split(" ").reduce((wordCount, word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
    return wordCount;
  }, {});
}

// Reduce function
function reduceFunction(mappedData) {
  return mappedData.reduce((reducedData, data) => {
    for (const word in data) {
      reducedData[word] = (reducedData[word] || 0) + data[word];
    }
    return reducedData;
  }, {});
}

// Function to process documents using map and reduce
function processDocuments(documents) {
  // Map phase
  const mapResults = documents.map(mapFunction);

  // Reduce phase
  const finalResult = reduceFunction(mapResults);

  // Output the result
  console.log("Word Count Result:");
  for (const [word, count] of Object.entries(finalResult)) {
    console.log(`${word}: ${count}`);
  }
}

processDocuments(documents);

