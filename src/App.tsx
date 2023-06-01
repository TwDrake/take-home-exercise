import "./App.css";
import { useGetCountry } from "./use-get-country.hook";

function App() {
  const [{ data, error, loading }, fetchCountry] = useGetCountry();

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const { country } = event.target as HTMLFormElement;
    fetchCountry(country.value.toUpperCase());
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="country">Country Code (2 letters)</label>
          <input
            className="country-input"
            type="text"
            name="country"
            id="country"
            maxLength={2}
            required
          />
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {error && <div className="error">Error: {error}</div>}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Country Name</td>
              <td>Capital</td>
              <td>States</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.name}</td>
              <td>{data?.capital}</td>
              <td>
                {!!data?.states.length && (
                  <select>
                    {data.states.split(", ").map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
