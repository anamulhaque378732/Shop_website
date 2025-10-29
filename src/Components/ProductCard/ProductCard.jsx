import { useContext } from 'react';
import { ProductContext } from "../../Context/Context";
import { getImageUrl } from "../../Utils/ProductUtils";




const ProductCard = ({ product }) => {
    const { cardData, setCardData } = useContext(ProductContext);



    const { title, rating, price, inStock, cover } = product;

    const handleAddToCard = (product) => {

        const found = cardData.find((item) => {

            return item.id === product.id
        });
        if (!found) {
            setCardData([...cardData, product])
        } else {
            console.error("product added already")
        }




    };

    return (
        <div className=" rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={getImageUrl(cover)} alt={title}
                    className="h-full w-auto object-cover" />
            </div>
            <div className="p-4">
                <h3 className="  font-bold text-2xl"> {title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-1">
                        <div className="flex text-yellow-400">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-1">{rating}</span>
                    </div>
                    <span className="text-xs  ">( {inStock} pcs )</span>
                </div>
                <p className="font-bold  ">  ${price} </p>
                <button onClick={() => handleAddToCard(product)} className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">Add To Card</button>
            </div>
        </div>
    );
};

export default ProductCard;