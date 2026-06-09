import mongoose from "mongoose";

//const url = "mongodb+srv://aluno:123@ifsul.fify4.mongodb.net/"
const url = "mongodb+srv://aluno:123@ifsul.fify4.mongodb.net/?appName=IFSUL"

const conexao = await mongoose.connect(url)

export default conexao