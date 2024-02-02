import axios from "axios"

export default class PostService {
    static async getAll() {

        try {
            const response = await axios.get('https://dummyjson.com/products')
            return response.data
        }

        catch (e) {
            console.log(e)
        }

    }

    static async getSeveral(page, limit) {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
            return response.data
        }

        catch (e) {
            console.log(e)
        }

    }
}