export interface ILogin {
  email: string,
  password: string
}

interface IUser extends ILogin {
  id?: number, 
  name: string,

}

export default IUser;