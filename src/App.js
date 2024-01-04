import { useEffect, useState } from "react";
import "./App.css";
import { MyMeals } from "./MyMeals";
import { getAllMeals, addMeal, editMeal, deleteMeal } from "./FetchMeals";

function App() {
  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal);
  }, []);

  const updatingInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setMealId(_id);
  };
  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && title.trim()) {
      if(editing) {
        editMeal(mealId, title, setTitle, setMeal, setEditing);
      } else {
        addMeal(title, setTitle, setMeal);
      }
    }
  };

  return (
    <div className="App">
      <h1>Meal plan</h1>
      <input
        type="text"
        placeholder="Add your meal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        disabled={!title.trim()}
        onClick={
          editing
            ? () => editMeal(mealId, title, setTitle, setMeal, setEditing)
            : () => addMeal(title, setTitle, setMeal)
        }
      >
        {editing ? "Edit" : "Add"}
      </button>

      {myMeal.map((meal) => (
        <MyMeals
          key={meal._id}
          text={meal.title}
          updatingInput={() => updatingInput(meal._id, meal.title)}
          deleteMeal={() => deleteMeal(meal._id, setMeal)}
        />
      ))}
    </div>
  );
}

export default App;
