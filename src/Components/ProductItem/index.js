import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "@mui/material/Button";
import ProductModal from '../ProductModal';
import { useState } from 'react';


const ProductItem = () => {

const  [isOpenProductModal,setisOpenProductModal] = useState(false);

const viewProductDetails=(id)=>{
    setisOpenProductModal(true);
}

const closeProductModal=()=>{
    setisOpenProductModal(false);
}

    return (
      <>
        <div className="item productItem">
            <div className="imgWrapper">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" alt="Best Seller Product" />

            <span className="badge badge-primary">28%</span>
            <div className="actions">
                <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen /></Button>
                <Button><IoMdHeartEmpty style={{fontSize:'20px'}} /></Button>
            </div>
            </div>

            <div className="info">
                <h4> All Natural Italian-Style Chicken Meatballs</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-3">$14.00</span>
                </div>
            </div>

        </div>

        {
            isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
        }

{/* <ProductModal/> */}

      </>
    )

}

export default ProductItem