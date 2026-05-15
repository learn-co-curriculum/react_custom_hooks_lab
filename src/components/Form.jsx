import { useLocalStorage } from "../hooks/useLocalStorage";

/*
  Form component
  - Stores user data
  - Persists data using localStorage
*/
function Form() {

  /*
    Store name value in localStorage
  */
  const [name, setName] =
    useLocalStorage("name", "");

  /*
    Store service number in localStorage
  */
  const [serviceNumber, setServiceNumber] =
    useLocalStorage("serviceNumber", "");

  return (
    <>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* Name input */}
        <label htmlFor="name">
          Name:
        </label>

        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* Service Number input */}
        <label htmlFor="service">
          Service Number:
        </label>

        <input
          id="service"
          type="text"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) =>
            setServiceNumber(e.target.value)
          }
        />

      </form>

      {/* Welcome message */}
      <h4>
        {
          name
            ? `Welcome, ${name}!`
            : "Enter your name"
        }
      </h4>

    </>
  );
}

export default Form;

