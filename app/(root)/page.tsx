
 async function page() {
  const response = await fetch("http://localhost:3000/api/books")
  const books = await response.json();

  return (
   <div>
    
    <h1 className="text-3xl items-center" >Hello World! there</h1>

    {books.map((book)=> 
    <div key = {book.id}>
      <h1>Title: <span className="text-2xl font-bolder">{book.name}</span></h1>
    </div>
    )}
   </div>
  );
}

export default page
