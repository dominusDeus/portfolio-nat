import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from '@/hoc/withAuth'

const OnlyAdmin = ({user, loading}) => {
  console.log(user);
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Admin page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
 
}

  
export default withAuth(OnlyAdmin)('admin');