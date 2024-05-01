import * as S from "./index.styles";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FetchVenues from "../../Hooks/VenueAPI";

export default function Searchbar() {
  const [SearchInput, setSearchInput] = useState("");
  const [SearchResults, setSearchResults] = useState("");
  const { venues } = FetchVenues("https://v2.api.noroff.dev/holidaze/venues/");

  useEffect(() => {
    if (SearchInput.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = venues.filter((venue) => {
      return venue.name.toLowerCase().includes(SearchInput.toLocaleLowerCase());
    });
    setSearchResults(results);
  }, [venues, SearchInput]);

  const HandleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <S.Searchdiv>
      <S.Searchbar
        className="text"
        onSubmit={(e) => e.preventDefault()}
        action="search"
        type="text"
        placeholder="Search venues"
        value={SearchInput}
        onChange={HandleSearch}
      ></S.Searchbar>
      <S.SearchItems>
        {SearchResults.length === 0 && SearchInput.trim() !== " "
          ? " "
          : SearchResults.map((venue) => (
              <Link to={`../../Pages/Venuepage/${venue.id}`} key={venue.id}>
                <S.SearchResults className="text">{venue.name}</S.SearchResults>
              </Link>
            ))}
      </S.SearchItems>
    </S.Searchdiv>
  );
}
