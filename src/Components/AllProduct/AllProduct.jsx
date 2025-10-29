import { data } from "../../Data/data";
import ProductCard from "../ProductCard/ProductCard";

const AllProduct = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            {
                data.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default AllProduct;