import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   setInterval(() => {
//     setCounter(count => count + 1)
//   }, 10000);

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 10000);
//   })

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }


// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);
//   }, [])

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const key = setInterval(() => {
//       setCounter(count => count + 1)
      
//     }, 1000);

    
//     return () => {
//         console.log(key);
//       clearInterval(key);
//     };
//   }, [])

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }


// export default function AdditionDisplay() {
//     const [number1, setNumber1] = useState(0);
//     const [number2, setNumber2] = useState(0);

//     // This is all unnecessary.

//     const [sum, setSum] = useState(0);
//     useEffect(() => {
//       setSum(number1 + number2);
//     }, [number1, number2]);

//     // const sum = number1 + number2;

//     return (
//       <p>{number1} + {number2} = {sum}</p>
//     );
//   }

export default function App() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // You should avoid direct manipulation when not necessary

  // useEffect(() => {
  //   document.getElementById("name").addEventListener("change", handleInput);
  //   return () => {
  //     document.getElementById("name").removeEventListener("change", handleInput);
  //   }
  // });

  return (
    <>
      {/* <input id="name" /> */}

      <input onChange={handleInput} value={input} />
      <p>{ input }</p>
    </>
  );
}



