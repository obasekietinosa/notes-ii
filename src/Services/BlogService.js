import fetch from "isomorphic-unfetch"

export default class BlogService {
    ROOT_URL = "https://services.etin.space/notes/"
    BASE_API_URL = this.ROOT_URL + "wp-json/wp/v2/"
    POSTS_URL = this.BASE_API_URL + "posts/"
    CATEGORIES_URL = this.BASE_API_URL + "categories/"
    AUTHOR_URL = this.BASE_API_URL + "authors/"

    getCategories = async (limit=100, offset=0) => {
        console.log("Getting categories")
        let response = await fetch(this.CATEGORIES_URL + "?_embed&per_page=" + limit, {
            method: 'GET'
        })
        let data = await response.json()
        return data
    }

    getPosts = async (limit=100, offset=0) => {
        console.log("Getting posts")
        let response = await fetch(this.POSTS_URL + "?_embed&per_page=" + limit, {
            method: 'GET'
        })
        let data = await response.json()
        return data
    }

    getCategoryWithPosts = async (categorySlug, limit=100, offset=0) => {
        console.log("Getting category")
        let categoryResponse = await fetch(`${this.CATEGORIES_URL}?slug=${categorySlug}`, {
            method: 'GET'
        })
        let data = await categoryResponse.json()
        data = data[0]

        let postsResponse = await fetch(this.POSTS_URL + "?_embed&categories=" + data.id + "&per_page=" + limit, {
            method: 'GET'
        })
        data.posts = await postsResponse.json()
        return data
    }

    getPostBySlug = async (slug) => {
        console.log("Getting Post")
        let response = await fetch(this.POSTS_URL + "?_embed&per_page=1&slug=" + slug, {
            method: 'GET'
        })
        let data = await response.json()
        return data[0]
    }

    getAuthor = async (slug) => {
        console.log("Getting Author")
        let response = await fetch(this.AUTHOR_URL + "?slug=" + slug, {
            method: 'GET'
        })
        let data = await response.json()
        return data[0]
    }
}
