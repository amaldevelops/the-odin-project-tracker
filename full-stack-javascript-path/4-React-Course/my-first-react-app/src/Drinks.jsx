// Challenge 3 of 3: Refactor a series of ? : to if and variables
// This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.

function Drink({ name }) {
  if (name === "tea") {
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>leaf</dd>
          <dt>Caffeine content</dt>
          <dd>15–70 mg/cup</dd>
          <dt>Age</dt>
          <dd>4,000+ years</dd>
        </dl>
      </section>
    );
  } else if(name==='coffee') {
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>bean</dd>
          <dt>Caffeine content</dt>
          <dd>80–185 mg/cup</dd>
          <dt>Age</dt>
          <dd>1,000+ years</dd>
        </dl>
      </section>
    );
  }
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
