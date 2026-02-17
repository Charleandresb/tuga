import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <form action="" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Buscador en desarrollo"
      />
      <Search className="search__icon" />
    </form>
  );
}
