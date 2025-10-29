import CardItem from "../CardItem/CardItem";
import CardSummary from "../CardSummary/CardSummary";


const CardSection = () => {
    return (
        <div className="lg:col-span-1 lg:mt-28">
            <div className="  rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                <CardItem></CardItem>
                <CardSummary></CardSummary>
            </div>
        </div>
    );
};

export default CardSection;