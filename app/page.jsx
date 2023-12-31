import "../src/styles/main.scss";
import { Hero, SearchBar, CustomFilter } from "@/components";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="home-main_container">
      <Hero />
      <div className="home_catalogue-container " id="discover">
        <div className="home__text-container">
          <h1>Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home_filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
