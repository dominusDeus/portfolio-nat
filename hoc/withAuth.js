import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { isAuthorized } from '@/actions/index';



const withAuth = Component => role => {
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

      if (role && !isAuthorized(user, role)) {
        return(
        <BaseLayout user={user} loading={isLoading}>
          <BasePage>     
            <h1> Hello {user.given_name}! Sorry, but this is an Admin page. Enjoy the rest of the content (=</h1>
          </BasePage>
        </BaseLayout>
        )
        // return <Redirect to= "/api/auth/login"/>
      }
      return  <Component user={user} loading= {isLoading} {...props} />
    }
  }

  
}

export default withAuth;