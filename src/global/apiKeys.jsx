const BASE_URL = "http://localhost:7000/api/";
// const BASE_URL = "https://greeny-backend.vercel.app/api/";

const apiTypes = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

const apiKeys = {
  // User
  userRegister: `${BASE_URL}user/register`,
  userLogin: `${BASE_URL}user/login`,
  getUserProfile: `${BASE_URL}user/profile`,
  editUserProfile: `${BASE_URL}user/profile/edit`,
  changePasswordOfUserProfile: `${BASE_URL}user/changePassword`,

  // Blog
  getAllBlogs: `${BASE_URL}admin/getAllBlogs`,
  getSingleBlog: `${BASE_URL}admin/getSingleBlog`,

  // Brand
  getAllBrands: `${BASE_URL}admin/getAllBrands`,
  getSingleBrand: `${BASE_URL}admin/getSingleBrand`,
  getProductsSingleBrand: `${BASE_URL}admin/getProductsSingleBrand/`,

  // Banners
  getAllBanners: `${BASE_URL}admin/getAllBanners`,

  // Products
  getAllProducts: `${BASE_URL}admin/getAllProducts`,
  getAllSingleProductData: `${BASE_URL}admin/getAllSingleProductData`,
  getCategoryProduct: `${BASE_URL}admin/getCategoryProduct/`,

  // Categories
  getAllCategories: `${BASE_URL}admin/getAllCategory`,

  // Cart
  addCart: `${BASE_URL}user/addCart`,
  getCartData: `${BASE_URL}user/getCartData`,
  updateCart: `${BASE_URL}user/updateCart/`,
  deleteCart: `${BASE_URL}user/deleteCart/`,
  totalCountCart: `${BASE_URL}user/totalCountCart`,

  // Wishlist
  addWishlist: `${BASE_URL}user/addWishlist`,
  getAllWishlist: `${BASE_URL}user/getAllWishlist`,
  deleteWishlist: `${BASE_URL}user/deleteWishlist/`,
  totalCountWishlist: `${BASE_URL}user/totalCountWishlist`,

  // Comment
  addComments: `${BASE_URL}user/addComments`,

  // Subscribe
  subscribeByUser: `${BASE_URL}user/subscribeByUser`,

  // Contact us
  addContactData: `${BASE_URL}user/addContactData`,

  // Checkout
  checkout: `${BASE_URL}user/checkout`,
  getAllOrdersByUser: `${BASE_URL}user/getAllOrdersUserById`,
};

export { apiKeys, apiTypes };
