import "../stylesheets/_Filter.scss";

const Filter = (props) => {
  const handleInputChange = (event) => {
    props.handleFilter(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        className="searchBox"
        placeholder="Type a character's name"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Filter;
