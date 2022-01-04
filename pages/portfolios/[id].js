import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetPostById } from "@/actions";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';


const portfolio = () => {
  const { user, isLoading } = useUser();
  
  const router = useRouter();
  const { data: portfolio, error, loading } =
   useGetPostById(router.query.id);
  
  const renderPost = () => {
    return(
      <>
          <h1>{ portfolio.title }</h1>
          <p>{portfolio.body}</p>
          <p>{portfolio.id}</p>
      </>
    )      
  }

  return (
    <>
      <BaseLayout user={user} loading={isLoading}>
        <BasePage>
          {portfolio &&
            renderPost(portfolio)
          }
          {error &&
            <div className= "alert alert-danger">{error.message}</div>
          }
          {
            loading &&
            <p>Loading data...</p>
          }
        </BasePage>
      </BaseLayout>
    </>
  )
}



// portfolio.getInitialProps = async ({ query }) => {

//   try {
//     const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
//     let post= res.data 

//     return { portfolio: post }

//   } catch(e) {
//     console.error(e);
//   }


// }


export default portfolio;