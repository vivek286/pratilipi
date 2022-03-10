import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import data from './docs/data.json'
const Profile = () => {
  const user = useUser({ redirectTo: '/login' })
  async function adddatatodb(){
  //   const response=await fetch('./api/add_story',{
  //     method:'POST',
  // body:(JSON.stringify(data)),
  // headers:{
  //     'content-type':'application/json'
  // }
  //   })
    // console.log(response);
  }
  return (
    <Layout>
      <h1>Profile</h1>
      {/* <button onClick={adddatatodb()}>Send to db</button> */}
      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}

export default Profile
