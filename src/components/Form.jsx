
import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Store the name and service number using our custom hook.
  const [name, setName] = useLocalStorage("name", "");
  const [service, setService] = useLocalStorage("service", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          data-testid="name"
          value={name ?? ""}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          type="text"
          id="service"
          data-testid="service"
          value={service ?? ""}
          onChange={(event) => setService(event.target.value)}
        />
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;