import { useState } from 'react';
import AllProduct from "../Components/AllProduct/AllProduct";
import CardSection from "../Components/CardSection/CardSection";
import Header from "../Components/Header/Header";
import ProductSection from "../Components/ProductSection/ProductSection";
import { data } from '../Data/data';

const Page = () => {

    const [allData, setAllData] = useState(data);


    return (
        <div className="">
            <Header />
            <main className="container mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 mt-10">
                        <ProductSection
                            allData={allData}
                            setAllData={setAllData}
                        />
                        <AllProduct
                            data={allData} />
                    </div>
                    <CardSection></CardSection>
                </div>
            </main>
        </div>
    );
};

export default Page;