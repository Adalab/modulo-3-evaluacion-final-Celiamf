import "../stylesheets/_Filter.scss";

const Filter = (props) => {
  const handleInputChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        className="searchBox"
        placeholder="Type a character's name"
        onChange={handleInputChange}
      />
      <label className="statusLabel" htmlFor="status">
        Status
      </label>
      <select
        className="statusSelect"
        name="status"
        id="status"
        onChange={handleInputChange}
      >
        <option value="all">all</option>
        <option value="Alive">alive</option>
        <option value="Dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
    </form>
  );
};

export default Filter;
