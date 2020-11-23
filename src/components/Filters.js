import "../stylesheets/_Filters.scss";

const Filters = (props) => {
  const handleInputChange = (event) => {
    props.handleFilter(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        className="searchBox"
        placeholder="Type any character's name"
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Filters;
