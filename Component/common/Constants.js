const prod = {
 url: {
        API_URL: 'https://shopically.co.in/'
    }
};
const dev = {
 url: {
        API_URL: 'http://localhost:80/'
 }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;