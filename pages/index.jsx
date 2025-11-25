import {useState} from 'react';


 
    export default function HomePage() {
      const [likes, setLikes] = useState(0);

      const names = ['Alice', 'Bob', 'Charlie'];
      function handleClick() {
        setLikes(likes + 1);
        console.log('You clicked the button!');
      } 

      return <div>
        <Header title="I love React!" />
        <Header />
        <ul>
          {names.map((name, index) => <li key={index}>{name}</li>)}   
        </ul>

        <button onClick={handleClick}>Like ({likes})</button>

        </div>;
    } 
    function Header({title}) {
    console.log(title);
      return <h1>{title ? title : "COOL" }</h1>;  
    }

 
 
 
