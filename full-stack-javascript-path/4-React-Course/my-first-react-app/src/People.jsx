// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

import { getImageUrl } from './utils.js';

export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  


// export default function List() {
//     const chemists = people.filter(person =>
//       person.profession === 'chemist'
//     );
//     const listItems = chemists.map(person =>
//       <li>
//         <img
//           src={getImageUrl(person)}
//           alt={person.name}
//         />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//         </p>
//       </li>
//     );
//     return <ul>{listItems}</ul>;
//   }


//   Challenge 1 of 4: Splitting a list in two 
// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.


export default function List() {
    const chemists=people.filter(person=>
        person.profession==='chemist'
    );

    const everyOneElse=people.filter(person=>
        person.profession!=='chemist'
    );

  const listItems = everyOneElse.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const chemistsList = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>

      <h1>Chemists</h1>
      <ul>{chemistsList}</ul>
      <h1>Everyone Else</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
