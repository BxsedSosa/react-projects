function MyButton({ count, setCounter }) {
  function doSomethingOnClick() {
    setCounter(count + 1);
  }

  return <button onClick={doSomethingOnClick}>Click {count} me</button>;
}

export default MyButton;
