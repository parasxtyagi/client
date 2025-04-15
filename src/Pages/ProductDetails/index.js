import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { BsCartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineCompareArrows } from 'react-icons/md';
import QuantityBox from "../../Components/QuantityBox";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };

  const currentProduct = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci.",
  };

  return (
    <section className="productDetails section">
      <div className="container">
        <div className="row">

          <div className="col-md-4 pl-5">
            <ProductZoom />
          </div>

          <div className="col-md-7 pl-5 pr-5">
            <h2 className="hd text-capitalize">
              All Natural Italian-Style Chicken Meatballs
            </h2>

            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-light mr-2">Brands:</span>
                  <span className="text-dark">Nature’s Best</span>
                </div>
              </li>

              <li className="list-inline-item ml-3">
                <div className="d-flex align-items-center">
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                  <span className="text-light cursor ml-2">1 Review</span>
                </div>
              </li>
            </ul>

            <div className="d-flex info mb-3">
              <span className="oldPrice">$20.80</span>
              <span className="netPrice text-danger ml-2">$14.00</span>
            </div>

            <span className="badge badge-success">IN STOCK</span>

            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
              Class aptent taciti sociosqu ad litora torquent...
            </p>

            <div className="productSize d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul className="list list-inline mb-0 pl-4">
                {["50g", "100g", "150g", "200g", "250g"].map((size, i) => (
                  <li key={i} className="list-inline-item">
                    <a className={`tag ${activeSize === i ? 'active' : ''}`} onClick={() => isActive(i)}>{size}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-flex align-items-center mt-3">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-5">
                <BsCartFill /> &nbsp; Add to cart
              </Button>

              <Tooltip title="Add to my list" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <FaRegHeart />
                </Button>
              </Tooltip>

              <Tooltip title="Compare" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                  <MdOutlineCompareArrows />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`tabBtn ${activeTabs === 0 ? 'active' : ''}`}
                  onClick={() => setActiveTabs(0)}
                >
                  Description
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`tabBtn ${activeTabs === 1 ? 'active' : ''}`}
                  onClick={() => setActiveTabs(1)}
                >
                  Additional Info
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`tabBtn ${activeTabs === 2 ? 'active' : ''}`}
                  onClick={() => setActiveTabs(2)}
                >
                  Reviews
                </Button>
              </li>
            </ul>
          </div>

          {/* Tabs Content */}
          {activeTabs === 0 && (
            <div className="tabContent">
              <p>{currentProduct.description}</p>
            </div>
          )}

          {activeTabs === 1 && (
            <div className="tabContent">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr><th>Stand Up</th><td>35”L x 24"W x 37-45"H (front to back heel)</td></tr>
                    <tr><th>Folded (w/ wheels)</th><td>32.5"L x 24"W x 18.5"H</td></tr>
                    <tr><th>Door Pass Through</th><td>24"</td></tr>
                    <tr><th>Weight (w/o wheels)</th><td>20 LBS</td></tr>
                    <tr><th>Weight Capacity</th><td>60 LBS</td></tr>
                    <tr><th>Seat Back Height</th><td>21.5"</td></tr>
                    <tr><th>Head Room (inside canopy)</th><td>25”</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTabs === 2 && (
            <div className="tabContent">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="mb-4">Write a Review</h4>
                  <form className="reviewForm">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Share your thoughts about the product..."
                      />
                    </div>
                    <div className="form-group">
                      <Rating name="review-rating" precision={0.5} />
                    </div>
                    <Button variant="contained" className="btn btn-primary">
                      Submit Review
                    </Button>
                  </form>
                </div>

                <div className="col-md-6">
                  <h4 className="mb-4">Customer Reviews</h4>

                  <div className="reviewsCard d-flex">
                    <div className="image">
                      <div className="rounded-circle">
                        <img src="https://i.pravatar.cc/100" alt="user" />
                      </div>
                    </div>
                    <div className="info pl-4">
                      <h6 className="mb-1">Jane Doe</h6>
                      <Rating name="read-only" value={5} readOnly size="small" />
                      <p className="mt-2 mb-0">Amazing quality and flavor. Highly recommended!</p>
                    </div>
                  </div>

                  <div className="reviewsCard d-flex">
                    <div className="image">
                      <div className="rounded-circle">
                        <img src="https://i.pravatar.cc/101" alt="user" />
                      </div>
                    </div>
                    <div className="info pl-4">
                      <h6 className="mb-1">John Smith</h6>
                      <Rating name="read-only" value={4.5} readOnly size="small" />
                      <p className="mt-2 mb-0">Tastes great! Will buy again.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <br />

        <RelatedProducts title="RELATED PRODUCTS" />
        <br />
        <RelatedProducts title="RECENTLY VIEWED PRODUCTS" />



      </div>
    </section>
  );
};

export default ProductDetails;
