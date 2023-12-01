import React from "react";

const RecursiveObjectRenderer = ({ data }) => {
  const renderObject = (obj) => {
    return (
      <ul>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>{" "}
            {typeof value === "object" ? (
              <RecursiveObjectRenderer data={value} />
            ) : (
              value
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderObject(data)}</div>;
};

// Пример использования компонента
const App = () => {
  const sampleData = {
    name: "John Doe",
    age: 25,
    address: {
      street: "123 Main St",
      city: "Example City",
      country: "Example Country",
    },
    hobbies: ["Reading", "Coding", "Hiking"],
  };

  return (
    <div>
      <h1>Recursive Object Renderer</h1>
      <RecursiveObjectRenderer data={sampleData} />
    </div>
  );
};

export default App;
