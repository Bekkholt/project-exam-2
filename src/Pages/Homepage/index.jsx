import Searchbar from "../../Components/Searchbar";
import VenueList from "../../Components/Venuelist";

export default function HomePage() {
  return (
    <div>
      <Searchbar />
      <div>
        <VenueList />
      </div>
    </div>
  );
}
