// export function Buttons(props) {
//     const buttonStyle = {
//       color: props.color,
//       fontSize: props.fontSize + 'px'
//     };
  
//     return (
//       <button style={buttonStyle}>{props.text}</button>
//     );
//   }

// export function Buttons({ text = "Click Me!", color = "red", fontSize = 12 }) {
//     const buttonStyle = {
//       color: color,
//       fontSize: fontSize + "px"
//     };
  
//     return <button style={buttonStyle}>{text}</button>;
//   }
  
//   export default function App() {
//     return (
//       <div>
//         <Button text="Click Me!" color="blue" fontSize={12} />
//         <Button text="Don't Click Me!" color="red" fontSize={12} />
//         <Button text="Click Me!" color="blue" fontSize={20} />
//       </div>
//     );
//   }

export function Buttons({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };

    return (
      <button onClick={handleClick} style={buttonStyle}>
        {text}
      </button>
    );
  }
  
//   export default function App() {
//     const handleButtonClick = () => {
//       window.location.href = "https://www.google.com";
//     };
  
//     return (
//       <div>
//         <Button handleClick={handleButtonClick} />
//       </div>
//     );
//   }
  
  