import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "@mui/material/Button";
import { useContext } from 'react';
import { MyContext } from '../../App';

const ProductItem = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
    // You can also set currentProduct in context if needed
    // context.setCurrentProduct(id);
  };

  return (
<div className={`productItem ${props.itemView}`}>
<div className="imgWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
          className="w-100"
          alt="Best Seller Product"
        />

        <span className="badge badge-primary position-absolute">28%</span>

        <div className="actions position-absolute">
          <Button onClick={() => viewProductDetails(1)}>
            <TfiFullscreen />
          </Button>
          <Button>
            <IoMdHeartEmpty style={{ fontSize: '20px' }} />
          </Button>
        </div>
      </div>

      <div className="info mt-3">
        <h4 className="mb-1">All Natural Italian-Style Chicken Meatballs</h4>
        <span className="text-success d-block mb-1">In Stock</span>
        <Rating
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
          className="mb-2"
        />

        <div className="d-flex align-items-center">
          <span className="oldPrice text-muted">$20.00</span>
          <span className="netPrice text-danger ml-3">$14.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
