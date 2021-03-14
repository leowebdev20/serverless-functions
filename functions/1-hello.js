// domain/.netlify/functions/functionName
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'My first serverless function on netlify'

    }
}