import React, { useState } from "react";

const CalorieForm = () => {

    const [data, setData] = useState({
        foodItem: "",
        calories: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/add", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setData({
                    foodItem: "",
                    calories: ""
                })
            }

        } catch (error) {
            console.log("error from add calerio",error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Food Item"
                value={data.foodItem}
                name="foodItem"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                placeholder="Calories"
                value={data.calories}
                name="calories"
                onChange={handleChange}
                required
            />
            <button type="submit">Add Entry</button>
        </form>
    );
};

export default CalorieForm;
