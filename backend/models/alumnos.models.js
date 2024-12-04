import {Schema, modelo} from "mongoose";

const EsquemaAlumnos = new Schema({
    name:String,
    apepat:String,
    email:String,
    NoLista:Number,
})

const ModeloAlumnos = new model("Total de alumnos", EsquemaAlumnos)