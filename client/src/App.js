import LandingPage from "./components/landingPage";
import NavBar from "./components/navBar";
import styles from "./App.module.scss"; 
import SearchBar from "./components/searchBar";
import LocationBar from "./components/ubicationBar";

function App() {
  return (
    <div className={styles.App}>
      
      <div className={styles.SearchBar}>
        <SearchBar />
      </div>

      <div className={styles.LocationBar}>
        <LocationBar />
      </div>

      <div className={styles.LandingPage}>
        <LandingPage/>
      </div>
      
      <div className={styles.LandingPage}>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
