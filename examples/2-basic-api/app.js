const result = document.querySelector('.result');



const fetchData = async () => {
    try {
        const {data} = await axios.get('/api/2-basic-api');
        result.textContent = data;
        const products = data.map((product) => {
            console.log(product);
        })
    } catch (error) {
        console.log(error.response);   
        result.textContent = error.response.data 
    }
}

fetchData();