import { AiFillDelete, AiFillEdit  } from "react-icons/ai";


export const MyMeals = ( { text, updatingInput, deleteMeal}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInput} />
            <AiFillDelete onClick={deleteMeal}/>
            
        </div>
    )
}

