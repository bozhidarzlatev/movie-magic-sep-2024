import Cast from "../models/Cast.js";

const create = (cast) => Cast.create(cast);

const getAll = () => Cast.find();

const getAllWithout = (castIds) => Cast.find({_id: { $nin: castIds }});

export default {
    create,
    getAll,
    getAllWithout
};