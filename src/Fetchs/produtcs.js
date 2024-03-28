export const products = (callBack) => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => callBack(json.products))
};


