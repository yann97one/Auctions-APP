import {useState} from "react";

function CategoryCreationForm() {
    const [categories, setCategories] = useState([])

    // const fetchCategories = async () => {
    //     const response = await apiClient.
    // }

    return (
        <div>
            <h1>Category Creation Form</h1>
            <form>
                <label>Category Name</label>
                <input type="text" placeholder="Category Name"/>
                <button type="submit">Create Category</button>
            </form>
        </div>
    )
}

export default CategoryCreationForm;