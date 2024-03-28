
export const categories = (callBack) => {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(json => callBack(json));

};
