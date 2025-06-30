function Item({ name, isPacked, importance }) {
  // Conditionally returning JSX
  // if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   }
  //   if (isPacked) {
  //     return null;
  //   }
  // return <li className="item">{name}: X</li>;

  // Conditional (ternary) operator (? :)
  //   return <li className="item">{isPacked ? <del>{name + "✅"}</del> : name}</li>;
  // Logical AND operator (&&)
  // return(
  //     <li className="item">
  //         {name}{isPacked && '✅'}
  //     </li>
  // )

  // Conditionally assigning JSX to a variable

  //   let itemContent = name;
  //   if (isPacked) {
  //     itemContent = <del>{name + " ✅"}</del>;
  //   }

  //   return <li className="item">{itemContent}</li>;
  // }

  //Challenge 1 of 3: Show an icon for incomplete items with ? :
  // Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.
  //   Solution
  //   return (
  //     <li className="item">
  //       {name}
  //       {!isPacked ? " ✅" : "❌"}
  //     </li>
  //   );
  // }

  // Challenge 2 of 3: Show the item importance with &&
  // In this example, each Item receives a numerical importance prop. Use the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

  // Space suit (Importance: 9)
  // Helmet with a golden leaf
  // Photo of Tam (Importance: 6)
  // Don’t forget to add a space between the two labels!

  return (
    <li className="item">
      {name}
      {importance > 0 && " "}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} isPacked={true} name="Space suit" />
        <Item importance={0} isPacked={true} name="Helmet with a golden leaf" />
        <Item importance={6} isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Recap
// In React, you control branching logic with JavaScript.
// You can return a JSX expression conditionally with an if statement.
// You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
// The shortcuts are common, but you don’t have to use them if you prefer plain if.
