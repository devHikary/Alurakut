import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutProfileSidebarMenuDefault, AlurakutMenu } from '../src/libs/AluraCommons';


function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <>
        <Box>
          <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
          <hr />
          <p>
            <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
              @{propriedades.githubUser}
            </a>
          </p>
          <hr />
        </Box >
    </>
  )
}

export default function ProfilePage(propos) {
  const router = useRouter()
  const usuarioAleatorio = propos.githubUser;

  return (
    <>
    <title>Alurakut</title>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div>
          <Box style={{weight: "600px"}}>
            <p>Perfil</p>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('http://localhost:3000/api/auth', {
    headers: {
      Authorization: token
    }
  })
    .then((resposta) => resposta.json())

  console.log(isAuthenticated)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}