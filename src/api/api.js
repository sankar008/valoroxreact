import axios from "axios";

import * as c from "./../const";

export async function category() {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.CATEGORY;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function sub_category(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.SUB_CATEGORY + "=" + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function category_wise_product(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.CATEGORY_WISE_PRODUCT + "=" + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function trending_product() {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.TRENDING_PRODUCTS;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function popular_category() {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.POPULAR_CATEGORY;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function get_wishlist(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.GET_WISHLIST + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function product_section_all(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        // Accept: "application/json",
      },
    };
    let url = c.PRODUCT_SECTION_ALL + "=" + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function product_section() {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.PRODUCT_SECTION;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function login(data) {
  try {
    let url = c.LOGIN;
    let res = await axios.post(url, data);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function product_details(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.PRODUCT + "=" + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function place_order(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.PLACE_ORDER + "=" + data;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function hotDeals() {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.HOT_DEALS;
    let res = await axios.get(url, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

// POST METHODS

export async function upload_prescription(data) {
  try {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "multipart/form-data",
      },
    };
    let url = c.UPLOAD_PRESCRIPTION;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function reset_password(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
      },
    };
    let url = c.RESET_PASSWORD;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function wishlist_store(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
      },
    };
    let url = c.WISHLIST_STORE;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function reset(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
      },
    };
    let url = c.RESET;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function search_key(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
      },
    };
    let url = c.SEARCH_KEY;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function subscribe(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
      },
    };
    let url = c.SUBSCRIBE;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function update_profile(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "multipart/form-data",
      },
    };
    let url = c.UPDATE_PROFILE;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function change_password(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "multipart/form-data",
      },
    };
    let url = c.CHANGE_PASSWORD;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    // console.log(e);
  }
}

export async function order_place(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "multipart/form-data",
      },
    };
    let url = c.ORDER;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function register(data) {
  try {
    let url = c.REGISTER;
    let res = await axios.post(url, data);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function contact_us(data) {
  try {
    const options = {
      headers: {
        authorization:
          "$2y$10$x4l3Nyiw../BnmWcHcDI3On9ySvVUlKz6MEzbHvsaK0Gsi5G9.W7e",
        Accept: "application/json",
      },
    };
    let url = c.CONTACT_US;
    let res = await axios.post(url, data, options);
    return res;
  } catch (e) {
    console.log(e);
  }
}

// export async function uploadNews(data) {
//   try {
//     const options = {
//       headers: {
//         authorization: "ABCDEFGHIJK",
//         Accept: "application/json",
//       },
//     };
//     let res = await axios.post(c.NEWS, data, options);
//     return res;
//   } catch (e) {
//     console.log(e);
//   }
// }
