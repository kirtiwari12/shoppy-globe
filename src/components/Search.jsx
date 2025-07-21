import { useNavigate } from "react-router";
export const Search = ({ searchValue, setSearchValue, className = "" }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = new URLSearchParams({
      q: searchValue,
    }).toString();
    navigate(`/search?${query}`);
  };

  return (
    <div className={`relative ${className}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          name="search"
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 w-full sm:w-auto"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 p-2 cursor-pointer"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};
