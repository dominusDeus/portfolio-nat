import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from '@/hoc/withAuth'
// import { useUser } from '@auth0/nextjs-auth0';

const Secret = ({user, loading}) => {
  // const { user, isLoading } = useUser();
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am a secret page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
 
}

//High order component - HOC
//Simple function that takes a component and returns new component with some extended functionality

// function withAuth(Component) {
//   return function(props) {
//     return <Component title="Hello World" {...props} />
//   }
// }

// const withAuth = Component => props => 
//   <Component title="Hello World" {...props} />
  
export default withAuth(Secret)();