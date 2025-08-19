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
            answer: "An algorithm is a set of instructions that can be followed to solve a problem or perform a task. It is a step-by-step process that takes input, processes it, and produces output.",
          },
          {
            id: "1.1.2",
            question: "What is Big O notation?",
            answer: "Big O notation is a way to describe the time complexity of an algorithm. It is a measure of the number of operations an algorithm takes to complete as a function of the size of the input. It is used to compare the efficiency of different algorithms.",
          },
          {
            id: "1.1.3",
            question: "What is constant time complexity?",
            answer: "Constant time complexity is an algorithm that takes the same amount of time to complete regardless of the size of the input. It is represented by O(1).",
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
];

export default questions;