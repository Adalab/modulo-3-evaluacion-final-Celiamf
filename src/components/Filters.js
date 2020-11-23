import "../stylesheets/_Filters.scss";

const Filters = (params) => {
  return (
    <form>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        className="searchBox"
        placeholder="Type any character's name"
      />
    </form>
  );
};

export default Filters;
