
const page = ({params}: {params: {id: string}}) => {
    const {id} = params;
    const newId = params.id;
  return (
    <div>
        <h1>This User is user {id}</h1>
        <h1>This User is user {newId}</h1>
    </div>
  )
}

export default page