import { handleCallback, handleAuth } from '@auth0/nextjs-auth0';
import { useRouter} from 'next/router';
import { redirect } from 'next/dist/server/api-utils';


export const callbackFunction = (req, res, session, state) => {
  try {
    // session.user.customProperty = 'foo';
    delete session.refreshToken;
    return session;
  } catch (e) {
    console.log(error);
    res.status(e.status || 400 ).end(e.message);
  }
}


//
// const afterCallback = (req, res, session, state) => {
//   session.user.customProperty = 'foo';
//   delete session.refreshToken;
//   return session;
// };
//


export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { callbackFunction });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});

// export default handleAuth()