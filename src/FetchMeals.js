import axios from "axios";

const getAllMeals = (setMeal) => {
  axios.get("https://mealplanner-lqhe.onrender.com").then(({ data }) => {
    console.log(data);
    setMeal(data);
  });
};

const addMeal = (title, setTitle, setMeal) => {
  axios.post("https://mealplanner-lqhe.onrender.com/savemeals", { title }).then((data) => {
    setTitle("");
    getAllMeals(setMeal);
  });
};

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
  axios
    .put("https://mealplanner-lqhe.onrender.com/editMeal", { _id: mealId, title })
    .then((data) => {
        console.log(data)
      setTitle("")
      setEditing(false)
      getAllMeals(setMeal)
    });
};

const deleteMeal = (_id, setMeal)=> {
    axios.post('https://mealplanner-lqhe.onrender.com/deleteMeal',{_id})
    .then((data)=>{
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };
