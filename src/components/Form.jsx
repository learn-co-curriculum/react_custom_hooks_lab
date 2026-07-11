import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Persist the user’s name and service number so the values survive refreshes.
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          data-testid="name"
          value={name ?? ""}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          id="service"
          type="text"
          data-testid="service"
          value={serviceNumber ?? ""}
          onChange={(event) => setServiceNumber(event.target.value)}
        />
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form