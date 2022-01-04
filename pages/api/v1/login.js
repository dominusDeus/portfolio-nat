import { handleAuth } from '@auth0/nextjs-auth0';



export default function login (req, res) {
  try{
    const login = async () => {
      await handleAuth();
    }
    console.log(login);
    res.status(200).send(login);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).end(e.message);
  }


}


// export default handleAuth();