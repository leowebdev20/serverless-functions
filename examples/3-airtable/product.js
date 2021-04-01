const result = document.querySelector('.result');

const fetchProduct = async () => {
    result.innerHTML = `<h2>Loading...</h2>`;
    try {
        const id = window.location.search;
        const data = await axios.get(`/api/3-product${id}`)
        const {name, desc, price, image} = fields;
    } catch (error) {
        result.innerHTML = `<h2>${error.response.data}</h2>`;
    }
};

fetchProduct();