import { useContext } from 'react';
import { ProductContext } from "../../Context/Context";
import CardItem from "../CardItem/CardItem";
import CardSummary from "../CardSummary/CardSummary";



const CardSection = () => {
    const { cardData } = useContext(ProductContext);

    let subTotal = cardData.reduce((previous, item) => previous + item.price, 0);
    let discount = subTotal * (20 / 100);
    let total = subTotal - discount + 15;

    return (
        <div className="lg:col-span-1 lg:mt-28">
            <div className="  rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                <CardItem />

                <CardSummary
                    subTotal={subTotal}
                    discount={discount}
                    total={total}
                />
            </div>
        </div>
    );
};

export default CardSection;