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

const StyledBold = styled.b`
    padding: 1vh;
`;

const StyledButton = styled.button`
    border-radius: 2vh;
    padding: 2vh;
    background: darkkhaki;
    color:white;
    border: none;
    &:hover{
        background: goldenrod;
    }
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
                        <p>Hi, user {session.user.name}</p>
                        <p>Email: {session.user.email}</p>
                        <p>You are signed in with Github.</p>
                    </div>
                ):(
                    <div>
                        <StyledBold>OAuth</StyledBold>
                        <p>You have not signed in.</p>
                        <StyledButton onClick={()=>signIn("github")}>Sign in with Github</StyledButton>
                    </div>
                )
                }
                </StyledDiv>

            </Container>
        </>

    )
}