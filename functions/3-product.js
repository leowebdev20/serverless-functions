require('dotenv').config();
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app3FEwds3Bx7A5Em')
  .table('products')
  
exports.handler = async (event, context) => {
    const {id} = event.queryStringParameters;
    if (id) {
        return {
            statusCode: 200,
            body: 'Single Product chosen'
        }
    }
    return {
        statusCode: 400,
        body: 'Provide product id!'
    } 
} 