import { useEffect, useState } from 'react';






const ProductSection = ({ allData, setAllData }) => {
    const [sortType, setSortType] = useState("All");

    useEffect(() => {
        const sorted = [...allData];

        if (sortType === "Newest") {
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortType === "Price: Low to High") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortType === "Price: High to Low") {
            sorted.sort((a, b) => b.price - a.price)
        };

        setAllData(sorted)


    }, [sortType]);


    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex bg-white text-black items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}

                    className="border rounded-md px-2 py-1 text-sm">
                    <option> All   </option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default ProductSection;