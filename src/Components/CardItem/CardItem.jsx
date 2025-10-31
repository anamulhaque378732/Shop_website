import { useContext, useState } from 'react';
import { ProductContext } from '../../Context/Context';
import { getImageUrl } from '../../Utils/ProductUtils';



const CardItem = () => {
    const [itemNumber, setIemNumber] = useState([]);
    const { cardData, setCardData } = useContext(ProductContext);


    const handleDelete = (id) => {
        const filteredItem = cardData.filter((item) => {
            return item.id !== id;
        });

        setCardData([...filteredItem])
    };


    const handleInCrease = (id, price, inStock) => {

        setIemNumber((prev) => {
            const current = prev[id] || 1;

            if (current < inStock) {
                return ({ ...prev, [id]: current + 1 })
            } else {
                return prev
            };

        });
    };

    const handleDecrease = (id) => {
        setIemNumber((prev) => {
            const current = prev[id] || 1;
            if (current > 1) {
                return ({ ...prev, [id]: current - 1 })
            } else {
                return prev
            };
        });
    };

    return (

        <>
            {
                cardData.map((item) => {
                    const quantity = itemNumber[item.id] || 1;
                    return (

                        <div key={item.id} className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                                <img src={getImageUrl(item.cover)} alt="Gradient Graphic T-shirt"
                                    className="h-full w-auto object-cover" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between">
                                    <h3 className="font-medium"> {item.title}</h3>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-500 btn ">  × </button>
                                </div>
                                <p className="text-sm text-gray-500">Size:  {item.size}</p>
                                <p className="text-sm text-gray-500">Color:  {item.color}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="font-bold">${item.price}  </p>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => handleDecrease(item.id)} className="w-6 h-6   rounded flex items-center justify-center">−</button>
                                        <span className="text-sm">{quantity}</span>
                                        <button onClick={() => handleInCrease(item.id, item.price, item.inStock)} className="w-6 h-6  rounded flex items-center justify-center">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })

            }
        </>
    )



};

export default CardItem;