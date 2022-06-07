import LandingPage from "./components/landingPage"
import NavBar from "./components/navBar"
import styles from "./App.module.scss"
import SearchBar from "./components/searchBar"
import LocationBar from "./components/ubicationBar"
import CategoryCard from "./components/categoryCard"
import AxiosTest from "./components/Tests/AxiosTest"

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
                <LandingPage />
                <CategoryCard />
            </div>

            <div className={styles.LandingPage}>
                <NavBar />
            </div>

            <AxiosTest />
        </div>
    )
}

export default App
