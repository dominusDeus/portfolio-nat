import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';



const withAuth = (Component) => {
  return props => {
    const { user, isLoading } = useUser();
  
    if (isLoading) {
      <BaseLayout user={user} loading={isLoading}>
        <BasePage>
          return <p>loading...</p>
        </BasePage>
      </BaseLayout>
    }

    if(!user) {
      return <Redirect ssr to= "/api/auth/login"/>

    } else {
      return  <Component user={user} loading= {isLoading} {...props} />
        // <BaseLayout user={user} loading={isLoading}>
        //   <BasePage>     
        //     <h1> {`I am a secret page - ${title}`}</h1>
        //   </BasePage>
        // </BaseLayout>
    }
  }

  
}

export default withAuth;