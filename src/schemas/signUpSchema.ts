import {z} from 'zod'

export const usernameValidation=z
.string()
.min(2,"Username must be atleast 2 characters")
.max(20,"Username must not be more than 20 Characters")
.regex(/.^[a-zA-Z0-9_]+$/,"Username must not contain special Characters")


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:'Please Enter a valid email address'}),
    password:z.string().min(8,{message:"Password must be of atleast 8 characters"})
})
