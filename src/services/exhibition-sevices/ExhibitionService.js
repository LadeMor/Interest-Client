import {getResource} from "../interest-service/InterestService";

const _apiBaseExhibition = "https://localhost:5001/api/Exhibition";

export const getAllExhibitions = async () => {
    const res = await getResource(_apiBaseExhibition);
    return res;
}

export const getExhibitionById = async (id) => {
    const res = await getResource(`${_apiBaseExhibition}/${id}`);
    return res;
}