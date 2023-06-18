import Users from "../models/UserModel.js";


export const checksForRegister = async (req, res, next) => {
    try {
        const { name, email, password, role,pin } = req.body;
        if (!name) return res.send("Name is required! in middleware");
        if (!email) return res.send("email is requierd! in middleware");
        if (!password) return res.send("password is requierd! in middleware");
        if (!role) return res.send("role is requierd! in middleware");
        if (!pin) return res.send("pin is requierd! in middleware");
        if (password.length <= 8) {
            return res.send("User Password length is less than 8 !")
        }
        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email is already Taken or You are already resgistered!!");
        }
        next();


    }catch (error) {
        return res.send(error)
    }
}


