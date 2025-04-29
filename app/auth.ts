import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const {handlers, auth} =NextAuth(
    {
        providers:[
            GitHub({
                clientId:process.env.GITHUB_CLIENT_ID,
                clientSecret:process.env.GITHUB_CLIENT_SECRET,
            })
        ],
        session:{
            strategy: 'jwt',
            maxAge:5, // session will expire in 5 seconds
        }
    }
)