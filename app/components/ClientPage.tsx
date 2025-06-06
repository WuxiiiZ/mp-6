"use client"
import {signIn} from "next-auth/react";
import {Session} from "next-auth";
import styled from "styled-components";
import Title from "./Title";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: papayawhip;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
const StyledDiv = styled.div`
    border: 1px solid #ededed;
    background: white;
    padding: 10vh;
    margin: 0 auto;
    text-align: center;
    font-size: calc(1px + 1.5vw);
    b{
        color: darkseagreen;
    }
`

const StyledBold = styled.p`
    font-weight: bold;
    padding: 2vh;
    color:black;
`;

const StyledSpan = styled.span`
    text-decoration: underline;
`;

const StyledButton = styled.button`
    border-radius: 2vh;
    padding: 1vh;
    margin: 0.5vh;
    background: darkkhaki;
    color:white;
    border: none;
    font-size: medium;
    &:hover{
        background: goldenrod;
    }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 1vh;
`;


export default function ClientPage({session}: {session: Session|null}) {

    return (
        <>
            <Title />
            <Container>
                <StyledDiv>
                {session?.user ?(
                    <div>
                        <b>Success! </b>
                    <br/>
                        <Avatar src={session.user.image || ""} alt="GitHub Avatar" />
                        <p>Hi, user <StyledSpan>{session.user.name}</StyledSpan></p>
                        <p>Email: <StyledSpan>{session.user.email}</StyledSpan></p>
                        <p>You have signed in with Github.</p>
                    </div>
                ):(
                    <div>
                        <StyledBold>OAuth</StyledBold>
                        <p>You have not signed in.</p>

                        <StyledButton onClick={()=>signIn("github",{prompt: "consent",})}>Sign in with Github</StyledButton>
                    </div>
                )
                }
                </StyledDiv>
            </Container>
        </>

    )
}