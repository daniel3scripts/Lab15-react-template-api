import axios from "axios";
import { BASE_URL } from "./global";

//Creamos 4 funciones CRUD

export const getData = async(url) => {
    try {
        const response = await axios.get(`${BASE_URL}${url}`
            /* , {
                        headers: {
                            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    } */
        );
        return response.data;
    } catch (error) {
        return error;
    }

};

export const storingData = async(url, data) => {
    try {
        const res = await axios.post(`${BASE_URL}
        ${url}`, data)
        return res.data;

    } catch (error) {
        return error;

    }
};

export const updatingData = async(url, data) => {
    try {
        const res = await axios.put(`${BASE_URL}
        ${url}`, data)
        return res.data;

    } catch (error) {
        return error;

    }
};
export const deleteData = async(url) => {
    try {
        const res = await axios.delete(`${BASE_URL}${url}`)
        return res.data;
    } catch (error) {
        return error;
    }

};