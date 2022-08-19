import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let CreateNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await HashUserPassword(data.Password);
            await db.User.create({
                Email: data.Email,
                Password: hashPasswordFromBcrypt,
                FirstName: data.FristName,
                LastName: data.LastName,
                PhoneUser: data.PhoneNumber,
                Address: data.Address,
                Gender: data.Render === '1' ? true : false,
                RoleId: data.Role
            })
            resolve('Oke! Create a new User succeed')
        } catch (e) {
            reject(e);
        }
    })
}

let HashUserPassword = (Password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(Password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let GetAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let Users = db.User.findAll({
                raw: true
            });
            resolve(Users);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    CreateNewUser: CreateNewUser,
    GetAllUser: GetAllUser,
}