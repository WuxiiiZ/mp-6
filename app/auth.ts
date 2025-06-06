import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {handlers, auth} =NextAuth(
    {
        providers:[
            GitHub({
                clientId:process.env.GITHUB_CLIENT_ID,
                clientSecret:process.env.GITHUB_CLIENT_SECRET,
                authorization: {
                    params: {
                        scope: "read:user user:email",
                        prompt: "consent"       // re-authorize the request
                    }}
            })
        ],
        session:{
            strategy: 'jwt',
            maxAge:1, // session will expire in 1 seconds
        },
    }
)