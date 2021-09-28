function TestButton(): JSX.Element {
  //const handleClick = () => console.log("I am working!");
  

  //return <button>Make me do something when I'm clicked...</button>;

  return (
    <button
     onClick={() => window.open("Yasss queen")}
    >Test Button</button>
  );
}

export default TestButton;
