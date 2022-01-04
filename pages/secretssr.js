import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import {getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

const SecretSSR = ({user}) => {
  
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>  
        <h1>I am a secret page - Hello {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps =  withPageAuthRequired({

  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    //check the console of backend, you will get tokens here

    
    if (!session || !session.user) {
      ctx.res.writeHead(302, {
        Location: '/api/auth/login'
      });
      ctx.res.end();
      return {
        props: {}
      }
    }

    return {
      props: { user: session.user }  
    };  

  }
});



  
export default SecretSSR;



