import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import {getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

const SecretSSR = ({user, title}) => {
  
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>  
        <h1>I am a secret page - Hello {user && user.name}, this is a title: {title.title} </h1>
      </BasePage>
    </BaseLayout>
  )
}

const getTitle = () => {
  return new Promise((resolve)=> {

    setTimeout(()=> {
      resolve({
        title: 'My new Title'
      })
    }, 500)
  })
}

export const getServerSideProps =  withPageAuthRequired({

  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const resTitle = await getTitle();
    console.log(session);
      
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
      props: { user: session.user, title: resTitle }  
    };  

  }
});



  
export default SecretSSR;


