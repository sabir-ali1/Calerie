import React, { useEffect, useState } from "react";

const GetCalori = () => {
    const [data, setData] = useState([]);

    // Fetch calorie data
    const getCalori = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/get`, {
                method: "GET",
            });

            if (response.ok) {
                const datas = await response.json();
                console.log(datas);
                setData(datas);
            }
        } catch (error) {
            console.error("Error fetching calorie data:", error);
        }
    };

    useEffect(() => {
        getCalori();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Calorie Tracker
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
                        >
                            <p className="text-sm text-gray-500">
                                Date: {new Date(item.createdAt).toLocaleDateString("en-GB")}
                            </p>

                            <h2 className="text-lg font-semibold text-gray-700 mt-2">
                                Food Item: {item.foodItem}
                            </h2>
                            <p className="text-gray-600 mt-1">Calories: {item.calories}</p>
                        <hr />
                            <br /><br />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No calorie data found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default GetCalori;
