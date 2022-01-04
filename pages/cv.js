import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';

const CV = () => {
  const { user, isLoading } = useUser();

  return(
    <>
      <BaseLayout user={user} loading={isLoading}>
        <BasePage>
          <h1> I am CV page</h1>
          </BasePage>
      </BaseLayout>
    </>
  )
}

export default CV;