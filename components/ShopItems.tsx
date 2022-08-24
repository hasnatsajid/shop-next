import Link from 'next/link';

import { products } from '../utils/products';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { RootState } from '../store/store';

const ShopItems = () => {
  const storeItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  console.log(storeItems);

  const onAddingToCart = (e) => {
    e.preventDefault();
    const productId = +e.target.dataset.productId;

    const existInStore = storeItems.find((item) => item.id === productId);

    const product = products.find((item) => item.id === productId);

    if (product && !existInStore) dispatch(addToCart(product));
  };

  return (
    <div className="product-section section pt-120 pb-120">
      <div className="container">
        {/* <!-- Product Wrapper Start--> */}
        <div className="row">
          {/* <!-- Product Start--> */}

          {products.map((product) => (
            <div className="col-lg-4 col-md-6 col-12 mb-60" key={product.id}>
              <div className="product">
                <div className="image">
                  <Link href={`/product/${product.id}`} className="img">
                    <img src={product.image} alt="Product" />
                  </Link>
                  <a href="/shop" className="wishlist">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>

                <div className="content">
                  <div className="head fix">
                    <div className="title-category float-left">
                      <h5 className="title">
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                      </h5>
                      <a href="/shop" className="category">
                        Catalog
                      </a>
                    </div>
                    <div className="price float-right">
                      <span className="new">${product.price}</span>
                    </div>
                  </div>

                  <div className="action-button fix">
                    <a href="/shop" data-product-id={product.id} onClick={onAddingToCart}>
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pagination col-12 mt-20">
            <ul>
              <li className="active">
                <a href="/shop">1</a>
              </li>
              <li>
                <a href="/shop">2</a>
              </li>
              <li>
                <a href="/shop">3</a>
              </li>
              <li>
                <a href="/shop">4</a>
              </li>
              <li>
                <a href="/shop">5</a>
              </li>
              <li>
                <a href="/shop">6</a>
              </li>
              <li className="arrows">
                <a href="/shop">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
