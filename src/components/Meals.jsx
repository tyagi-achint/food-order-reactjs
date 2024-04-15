import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";
import Error from "../util/Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    "https://reactbite-backend.onrender.com/meals",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Meals are loading...</p>;
  }

  if (error) {
    return <Error title="Failed to Fetch Meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
