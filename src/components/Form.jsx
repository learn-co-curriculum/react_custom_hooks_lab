import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // state tied to local
  // "name" and "serviceNumber" persist after refresh
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  // Ui and loacl handlers
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleServiceChange(e) {
    setName(e.target.value);
  }

  // display form and dynamic text
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          data-testid={"name"}
          value={name}
          onChange={handleNameChange}
        />
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form