import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("Please login first");
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch(error => {
            setError(error.response?.data?.message || "Error fetching blog");
            setLoading(false);
        });
    }, [id])

    return {
        loading,
        blog,
        error
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("Please login first");
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(error => {
            setError(error.response?.data?.message || "Error fetching blogs");
            setLoading(false);
        });
    }, [])

    return {
        loading,
        blogs,
        error
    }
}