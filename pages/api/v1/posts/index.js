import axios from 'axios';



export default async (req, res) => {
 
  try {
    const axiosRes= await axios.get('https://jsonplaceholder.typicode.com/posts', {
     params: {
       _limit: 10
     }
   });
   let posts= axiosRes.data 
   res.status(200).json(posts);

  } catch(e) {
    console.error(e);
    res.status(e.status || 400).json({message: 'Api Error'});
  }

}

