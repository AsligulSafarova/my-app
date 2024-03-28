
export const SigleCategoryFetch = (callBack, title) => {
    fetch(`https://dummyjson.com/products/category/${title}`)
        .then(res => res.json())
        .then(data => callBack(data));
}