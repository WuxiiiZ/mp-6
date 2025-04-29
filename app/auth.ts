import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

export const {handlers, auth} =NextAuth(
    {
        providers:[
            GitHub({
                clientId:process.env.GITHUB_CLIENT_ID,
                clientSecret:process.env.GITHUB_CLIENT_SECRET,
                authorization: {params: {scope: "read:user user:email"}},
            })
        ],
        session:{
            strategy: 'jwt',
            maxAge:5, // session will expire in 5 seconds
        }
    }
)