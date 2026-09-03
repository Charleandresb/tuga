class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  makeFetch(url, method = "GET", body = {}) {
    let request;
    if (method === "GET" || method === "PUT" || method === "DELETE") {
      request = fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      request = fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    return request
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  productList() {
    return this.makeFetch(`${this.baseUrl}/products/all`);
  }

  productTypeList(productType) {
    return this.makeFetch(
      `${this.baseUrl}/products/type?productType=${productType}`,
    );
  }

  selectedProduct(productSku) {
    return this.makeFetch(
      `${this.baseUrl}/products/sku?productSku=${productSku}`,
    );
  }

  productVariants(productId) {
    return this.makeFetch(`${this.baseUrl}/products/variants/${productId}`);
  }

  syncCart(items) {
    return this.makeFetch(`${this.baseUrl}/products/cart/validate`, "POST", {
      items,
    });
  }
}

const api = new Api({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
