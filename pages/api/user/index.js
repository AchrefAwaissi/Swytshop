import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        //mettre à jour le nom et l'avatar de l'utilisateur
        case "PATCH":
            await uploadInfor(req, res)
            break;
        case "GET":
            await getUsers(req, res)
            break;
    }
}

const getUsers
 = async (req, res) => {
    try {
        //authentifie l'utilisateur avant de lui permettre d'accéder aux données.
       const result = await auth(req, res)
       if(result.role !== 'admin') 
       return res.status(400).json({err: "Authentication is not valid"})

        const users = await Users.find().select('-password')
        res.json({users})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

//Acceder aux données et update
const uploadInfor = async (req, res) => {
    try {
        const result = await auth(req, res)
        const {name, avatar} = req.body

        const newUser = await Users.findOneAndUpdate({_id: result.id}, {name, avatar})

        res.json({
            msg: "Update Success!",
            user: {
                name,
                avatar,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}