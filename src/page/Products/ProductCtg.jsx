import React, { useContext } from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Katalog from '../../components/Katalog/Katalog'
import { useProductsQuery } from '../../services/productApi'
import { StateContext } from '../../context'
import ProductCard from './ProductCard'
import { Helmet } from 'react-helmet'

function ProductCtg() {
    const { lang, type, } = useContext(StateContext)

    const { data: products, isLoading: productsIsloading, } = useProductsQuery({
        type: type,
        product_id: "all",
    });

    return (
        <>
        <Helmet>
            <title>{`Karniz ${type=='karniz'?'':type} ${type == 'dori_aparat' ? 'sprayer' : ''}`}</title>
            <meta name="description" content={`karniz ${type.toLocaleLowerCase()} narxlari, karniz ${type.toLocaleLowerCase()} sotib olish, karniz ${type.toLocaleLowerCase()} fargona`} />
        </Helmet>
        <div className="py-10 container">
            <div className="p-0">
                <Katalog />
            </div>
            <h1 className='font-[900] my-[20px] leading-[24px] text-[28px]'>{`Karniz ${type=='karniz'?'':type} ${type == 'dori_aparat' ? 'sprayer' : ''}`}</h1>
            <div style={{ paddingBottom: '60px', paddingTop: '10px' }} className='grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-5'>
                {productsIsloading && <p>Loading...</p>}
                {products?.length > 0 ? products?.map(product => <ProductCard key={product.prod_id} product={product} {...product} />) : <p>{lang === 'ru' ? 'продукт не найден' : 'Mahsulot topilmadi'}</p>}
            </div>
        </div>
        </>
    )
}

export default ProductCtg