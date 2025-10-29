import AllProduct from "../Components/AllProduct/AllProduct";
import CardSection from "../Components/CardSection/CardSection";
import Header from "../Components/Header/Header";
import ProductSection from "../Components/ProductSection/ProductSection";

const Page = () => {
    return (
        <div className="mx-10">
            <Header />
            <main className="container mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 mt-10">
                        <ProductSection />
                        <AllProduct />
                    </div>
                    <CardSection></CardSection>
                </div>
            </main>
        </div>
    );
};

export default Page;