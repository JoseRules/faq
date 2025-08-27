const questions = [
  {
    id: "1",
    title: "Algorithms",
    content: [
      {
        id: "1.1",
        title: "General",
        type: "subcategory",
        content: [
          {
            id: "1.1.1",
            question: "What is an algorithm?",
            answer: "An **algorithm** is a set of instructions that can be followed to solve a problem or perform a task. It is a **step-by-step process** that takes input, processes it, and produces output.",
          },
          {
            id: "1.1.2",
            question: "What is Big O notation?",
            answer: "Big O notation is a way to describe the time complexity of an algorithm. It is a measure of the number of operations an algorithm takes to complete as a function of the size of the input.\n\nKey points:\n- It is used to compare the efficiency of different algorithms\n- It describes the worst-case scenario\n- It ignores constants and lower-order terms\n- Common notations include O(1), O(n), O(n²), O(log n)",
          },
          {
            id: "1.1.3",
            question: "What is constant time complexity?",
            answer: "**Constant time complexity** is an algorithm that takes the same amount of time to complete regardless of the size of the input.\n\nKey characteristics:\n- **Time complexity**: O(1)\n- **Performance**: **Consistent** regardless of input size\n- **Examples**: Array access, hash table lookups\n- **Best case**: Always the same performance",
          },
          {
            id: "1.1.4",
            question: "What is linear time complexity?",
            answer: "Linear time complexity is an algorithm that takes the same amount of time to complete as the size of the input. It is represented by O(n).",
          },
          {
            id: "1.1.5",
            question: "What is quadratic time complexity?",
            answer: "Quadratic time complexity is an algorithm that takes the square of the size of the input to complete. It is represented by O(n^2).",
          },
          {
            id: "1.1.6",
            question: "What is logarithmic time complexity?",
            answer: "Logarithmic time complexity is an algorithm that takes the logarithm of the size of the input to complete. It is represented by O(log n).",
          },
          {
            id: "1.1.7",
            question: "What is exponential time complexity?",
            answer: "Exponential time complexity is an algorithm that takes the exponential of the size of the input to complete. It is represented by O(2^n).",
          },
          {
            id: "1.1.8",
            question: "What is factorial time complexity?",
            answer: "Factorial time complexity is an algorithm that takes the factorial of the size of the input to complete. It is represented by O(n!).",
          },
        ],
      },
      {
        id: "1.2",
        title: "Math Algorithms",
        type: "subcategory",
        content: [
          {
            id: "1.2.1",
            question: "Fibonacci sequence",
            answer: "The Fibonacci algorithm generates numbers in a sequence where each number is the sum of the two preceding ones, typically starting with 0 and 1.",
          },
          {
            id: "1.2.2",
            question: "",
            answer: "",
          },
        ],
      },
      {
        id: "1.3",
        title: "Search Algorithms",
        type: "subcategory",
        content: [
          {
            id: "1.3.1",
            question: "What is linear search algorithm about?",
            answer: "Linear search is a simple search algorithm that checks each element of the list sequentially until it finds the target element or reaches the end of the list. It is a basic algorithm used to find elements in a list.",
          },
          {
            id: "1.3.2",
            question: "What is binary search algorithm about?",
            answer: "Binary search is a more efficient search algorithm that works on sorted lists. It repeatedly divides the search interval in half until the target element is found or the interval is empty. It is a popular algorithm used to find elements in a sorted list.",
          },
        ],
      },
      {
        id: "1.4",
        title: "Sorting Algorithms",
        type: "subcategory",
        content: [
          {
            id: "1.4.1",
            question: "How does bubble sort work?",
            answer: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
          },
          {
            id: "1.4.2",
            question: "What is the time complexity of merge sort?",
            answer: "Merge sort has a time complexity of O(n log n) in all cases, making it one of the most efficient sorting algorithms.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Data Structures",
    content: [
      {
        id: "2.1",
        title: "Linear Structures",
        type: "subcategory",
        content: [
          {
            id: "2.1.1",
            question: "What is an array?",
            answer: "An array is a collection of elements stored at contiguous memory locations, where elements can be accessed directly by using an index.",
          },
          {
            id: "2.1.2",
            question: "What is a linked list?",
            answer: "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "React",
    content: [
      {
        id: "3.1",
        title: "Hooks",
        type: "subcategory",
        content: [
          {
            id: "3.1.1",
            question: "What is useState React Hook?",
            answer: "It is a React hook that allows you to add a state variable to a component. It is a function that takes the initial state as a parameter and returns an array with two values, the current state value and a set function that lets you update the state to a different value and trigger a rerender.",
          },
          {
            id: "3.1.2",
            question: "What is useEffect React Hook?",
            answer: "It is a React hook that allows to synchronize a component with an external system. It takes a setup function wich may include a cleanup return function and an array of dependencies. If nothing is sent as second parameter, useEffect function will get triggered everytime the component gets updated, if we sent an empty array, it will get triggered only at the first render and if we send some dependencies within the array, function will get triggered everytime any of the dependencies mentioned get updated.",
          },
          {
            id: "3.1.3",
            question: "What is useRef React Hook?",
            answer: "It is a React hook that lets you keep a reference of a value that's not needed for rendering. It is a function that takes the initial value and returns an object with a single property, the current state which can be mutated and it won't cause a rerender.",
          },
          {
            id: "3.1.4",
            question: "What is useReducer React Hook?",
            answer: "It is a React hook that allows us to manage the state of a component with a Reducer. It takes a reducer function, an initial argument and an initializer function that should return initial state, and it returns an array with two values, the current state and a dispatch function we will use to update our state and triggered a rerender. The dispatch function will receive two parameters, state and action, dispatch function will update state according to action type.",
          },
          {
            id: "3.1.5",
            question: "What is useMemo React Hook?",
            answer: "It is a React Hook that allows to cache the result of a calculation between rerenders. It takes a function that calculates the value we want to cache and a list of dependencies, at first render it will return the result of the calculation and after every render it will check the dependencies added, if those are exactly the same as in the previous render, it will provide the stored value.",
          },
          {
            id: "3.1.6",
            question: "What is useCallback React Hook?",
            answer: "It is a React Hook that allows to cache a function definition between rerenders. It takes a function that needs to be cached and a list of dependencies, at first render it will return the function as it was passed as parameter, on the next renders, it will pass either that function stored on the last render (if the dependencies hasn't changed) or return the function that has been passed during this render.",
          },
          {
            id: "3.1.7",
            question: "What is useContext React Hook?",
            answer: "It is a React Hook that allows to create a context and read and suscribe to it. It receives a context as a parameter (previously created with createContext function) and we wrap it within the components we want to be able to read or update our state, so through value property we send the value or the setter function and all components inside of the provider will be able to access and use it.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Typescript",
    content: [
      {
        id: "4.1",
        title: "General",
        type: "subcategory",
        content: [
          {
            id: "4.1.1",
            question: "What native types does JS already have?",
            answer: "number, string, boolean, null, undefined, object and function.",
          },
          {
            id: "4.1.2",
            question: "What basic types does Typescript add up to the original ones?",
            answer: "any, unknown, never, array, tuple, Enum and inferred types.",
          },
          {
            id: "4.1.3",
            question: "What is a tuple?",
            answer: "A tuple is a typed array with a pre-defined length and types for each index. Tuples allow each element in the array to be a known type of value.",
          },
          {
            id: "4.1.4",
            question: "What is an enum?",
            answer: "An enum is a special type that represents a set of named constants. It is a way to create a new type with a set of values. They come in two types, string and numeric, and they can be initialized or not.",
          },
          {
            id: "4.1.5",
            question: "What is an inferred type?",
            answer: "An inferred type is a type that is automatically inferred by the compiler based on the value assigned to a variable. It is a way to create a new type with a set of values.",
          },
          {
            id: "4.1.6",
            question: "What is the type 'never' used for in Typescript?",
            answer: "The never type is often used in scenarios where TypeScript can infer that a function or variable will never produce a valid value or reach the end of execution. It's particularly useful for catching programming errors and indicating that certain code paths are unreachable.",
          },
          {
            id: "4.1.7",
            question: "What is the type 'any' used for in Typescript?",
            answer: "The any type is used to tell the compiler that we don't know the type of the value and we want to avoid type checking and compilation errors. It's particularly useful when we're working with external libraries or when we're dealing with dynamic data.",
          },
          {
            id: "4.1.8",
            question: "What are Union types?",
            answer: "Union types are used when a value can be more than a single type. They are defined using the pipe symbol (|).",
          },
          {
            id: "4.1.9",
            question: "What are Intersection types?",
            answer: "An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types. They are defined using the ampersand symbol (&).",
          },
          {
            id: "4.1.10",
            question: "What are Literal types?",
            answer: "TypeScript literal types allow developers to specify exact values for variables, function parameters, or properties, enhancing type safety by ensuring variables can only hold predefined values.",
          },
          {
            id: "4.1.11",
            question: "What are Type Aliases?",
            answer: "Type aliases create a new name for a type. They are defined using the type keyword. They are declared using the type keyword, followed by the alias name, an equals sign and the type definition.",
          },
          {
            id: "4.1.12",
            question: "How does TypeScript handle null values?",
            answer: "By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true. null and undefined are primitive types and can be used like other types, such as string. When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.",
          },
          {
            id: "4.1.13",
            question: "What is Optional Chaining used for in Typescript?",
            answer: "Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.",
          },
          {
            id: "4.1.14",
            question: "What is type assertion?",
            answer: "Type assertion allow developers to override the compiler's inferred type, informing it of the specific type of a value.\n\n- Type assertions are purely compile-time constructs and do not alter the runtime behavior of the code.\n- They are particularly useful when interfacing with APIs or third-party libraries that return values of type any.\n- They use the 'as' keyword or angle bracket syntax.",
          },
          {
            id: "4.1.15",
            question: "What is unknown type in Typescript?",
            answer: "It is the type-safe counterpart of the any type.\n The main difference between unknown and any is that unknown is much less permisive than any, we have to do some form of checking before performing most operations on values of type unknown, whereas we don't have to do any checks before performing operations of type any.",
          },
          {
            id: "4.1.16",
            question: "How does access control is done in Typescript?",
            answer: "- **readonly:** This prevents assignments to the field outside of the constructor. \n - **public:** The default visibility of class members is public. A public member can be accessed anywhere. \n - **protected:** Protected members are only visible to subclasses of the class they're declared in. \n- **private:** Private members are only visible inside the class they're declared in. (By convention the variable name is preceded by an underscore)",
          },
          {
            id: "4.1.17",
            question: "What does static mean in Typescript?",
            answer: "static is used to declare methods and properties that are owned by the class itself, they are accessed using the class name and dot notation, without creating an object.",
          },
          {
            id: "4.1.18",
            question: "What are interfaces in TypeScript?",
            answer: "It is a syntactical contract that defines the expected structure of an object. It provides a way to describe the shape of objects, including their properties and methods, without implementing any functionality. Interfaces solely focus on the structure and type-checking aspects, allowing for better code understanding and validation during development.",
          },
          {
            id: "4.1.19",
            question: "What are classes in TypeScript?",
            answer: "It is a blueprint for creating objects. It is a way to create a new type, like an object constructor or a 'blueprint' for an object. It is a way to create a new type, like an object constructor or a 'blueprint' for an object.",
          },
          {
            id: "4.1.20",
            question: "What is a constructor in Typescript?",
            answer: "A constructor is a special method that is used to initialize objects. It is a function that is called when a new object is created. It is used to set initial values for object properties.",
          },
          {
            id: "4.1.21",
            question: "What are abstract classes in TypeScript?",
            answer: "Is typically used to define common behaviours for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly. It could contain abstract and implemented methods.",
          },
          {
            id: "4.1.22",
            question: "What is a decorator in TypeScript?",
            answer: "A decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.",
          },
          {
            id: "4.1.23",
            question: "Interfaces vs abstract classes in TypeScript?",
            answer: "- **Purpose:** Abstract classes define common functionality and structure, while interfaces only contractual structure. \n - **Implementation:** Abstract classes contain implemented and abstract methods, while interfaces only contain method signatures. \n - **Multiple Inheritance:** Abstract classes support single class inheritance, while interfaces support multiple interface implementation. \n - **Constructors:** Abstract classes can have constructors for initialization, while interfaces can't. \n - **Usage:** Abstract classes are used to share functionality among related classes, while interfaces are used to design contracts and structure.",
          },
          {
            id: "4.1.24",
            question: "What are index signatures in TypeScript?",
            answer: "A type in Typescript usually describes an exact set of fields to match on an object. An index signature is a way to define the shape of fields which are not known ahead of time, it indicates to Typescript that any fields on the object which are not mentioned will be a particular type.",
          },
          {
            id: "4.1.25",
            question: "What is a namespace in TypeScript?",
            answer: "A namespace is a way to group related code together. It is a way to create a new scope, like an object constructor or a 'blueprint' for an object. It is a way to create a new scope, like an object constructor or a 'blueprint' for an object.",
          },
        ],
      },
    ],
  },
];

export default questions;