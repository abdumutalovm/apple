import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';

function Product_Detail3() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selector, setSelector] = useState(null);
    const [applyColor, setApplyColor] = useState(null);

    useEffect(() => {
        const cleanedId = id.replace(':', '');
        fetch('http://localhost:3000/macs')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                const iphones = data;
                const selectedProduct = iphones[parseInt(cleanedId - 1)];
                setProduct(selectedProduct);
                setLoading(false);
            })
            .catch(err => {
                console.log('Fetch error: ', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className='w-10 flex flex-col justify-center mx-auto'>
            <Puff
                visible={true}
                height="100"
                width="100"
                color="cyan"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    function hanldeSelect(index, color) {
        setSelector(index);
        setApplyColor(color);
    }

    function hanldeAddBag() {
        const data = {
            name: product.name,
            img: product.image_url,
            price: product.price,
            color: applyColor,
        };

        const isExist = JSON.parse(localStorage.getItem('bag')) || [];
        const newBag = [...isExist, data];
        localStorage.setItem('bag', JSON.stringify(newBag));
    }


    return (
        <div className="px-32 max-w-screen-2xl py-5 mx-auto flex items-center">
            <img className='w-[700px] object-contain h-[600px]' src={product.image_url} alt={product.name} />
            <div>
                <h2 className='text-zinc-600 font-bold text-2xl'>{product.name}</h2>
                <p className='text-gray-600 font-semibold text-base mt-3 mb-3'>{product.description}</p>
                <p className='text-zinc-600 font-semibold text-2xl mb-5'>$ {product.price}</p>
                <ul className='flex flex-col gap-2 mb-5'>
                    {product.features.map((feature, index) => (
                        <li className='text-zinc-600 text-base' key={index}>{feature}</li>
                    ))}
                </ul>
                <div className='flex items-center gap-3'>
                    Colors:
                    {product.colors.map((color, index) => (
                        <div className={`${selector === index ? "border-2 border-zinc-700" : ""} rounded-xl`} key={index} style={{ backgroundColor: color, width: 25, height: 25, display: 'inline-block', margin: 2 }} onClick={() => hanldeSelect(index, color)}></div>
                    ))}
                </div>
                <button className='transition px-4 py-2 bg-blue-500 text-xl font-semibold text-white w-full rounded-lg mt-8 hover:bg-blue-600' onClick={hanldeAddBag}>Buy</button>
            </div>
        </div >
    );
}

export default Product_Detail3;
