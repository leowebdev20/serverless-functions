require('dotenv').config();
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app3FEwds3Bx7A5Em')
  .table('products')
  
exports.handler = async (event, context) => {
    const {id} = event.queryStringParameters;
    if (id) {
        try {
            const product = await airtable.retrieve(id)
            if (product.error) {
                return {
                    statusCode: 404,
                    body: 'Id not found!'
                } 
            }
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: 'Server Error'
            } 
        }
    }
    try {
        const {records} = await airtable.list();
        const products = records.map((product) => {
            const {id} = product;
            const {name, image, price} = product.fields;
            const url = image[0].url;
            return {id, name, url, price};
        });
        return {
            statusCode: 200,
            body: JSON.stringify(products),
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: 'Server Error',
        }
    }
} 