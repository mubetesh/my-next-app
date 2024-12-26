
import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

async function page({searchParams}: {searchParams : Promise <{query?: string}>}) {

  const query = (await searchParams).query;
  const cards = [ {
    createdAt: new Date(),
    title : "The future of AI",
    _id : 1,
    description: "The first authentic article about the winning personalities and the choice of positive attitude.",
    author: {_id: 1, name:"Mubarek"},
    image: "https://www.biworldwide.ca/globalassets/how-do-you-win-with-incentives.jpg?width=720&height=630&mode=crop&scale=both",
    views:27,
    category: "Technology"
  },
  {
    createdAt: new Date(),
    title : "The walking Robot",
    _id : 2,
    description: "The first authentic article about the winning personalities and the choice of positive attitude.",
    author: {_id: 3, name:"Yahya"},
    image: "https://www.biworldwide.ca/globalassets/how-do-you-win-with-incentives.jpg?width=720&height=630&mode=crop&scale=both",
    views:46,
    category: "Robotics"
  },
  {
    createdAt: new Date(),
    title : "Respiratory System",
    _id : 3,
    description: "The first authentic article about the winning personalities and the choice of positive attitude.",
    author: {_id: 2, name:"Miftah"},
    image: "https://www.biworldwide.ca/globalassets/how-do-you-win-with-incentives.jpg?width=720&height=630&mode=crop&scale=both",
    views:38,
    category: "Health"
  },
  {
    createdAt: new Date(),
    title : "The Memeind Robot",
    _id : 4,
    description: "The first authentic article about the winning personalities and the choice of positive attitude.",
    author: {_id: 12, name:"Ametellah"},
    image: "https://www.biworldwide.ca/globalassets/how-do-you-win-with-incentives.jpg?width=720&height=630&mode=crop&scale=both",
    views:57,
    category: "Robotics"
  },
  {
    createdAt: new Date(),
    title : "The Tech Zone",
    _id : 5,
    description: "The first authentic article about the winning personalities and the choice of positive attitude.",
    author: {_id: 9, name:"Tom"},
    image: "https://www.biworldwide.ca/globalassets/how-do-you-win-with-incentives.jpg?width=720&height=630&mode=crop&scale=both",
    views:65,
    category: "Technology"
  },
]

  return (
   <div>
    <section className="pink_container">
    <h1 className="heading">Connect with peoples <br/> The world is yours...</h1>
    <h2 className="sub-heading !max-w-3xl" >Hello World! here is the destiny starts...</h2>

    <SearchForm query = {query}/>
    </section>
    <section className= "section_container">
      <p className="text-30-semibold">{query ? `Search results for "${query}"` : "All Programs"}</p>
      <ul className="mt-7 card_grid">
        {cards?.length>0 ? (  
            query ? 
            (cards.map((card: StartupCardType) => ((query == card.category.toLowerCase() && <StartupCard key={card?._id} card = {card} />)))) : 
            (cards.map((card: StartupCardType) => (<StartupCard key={card?._id} card = {card} />)))
          ) : (
            <p>No Startup Found</p>
          )}
      </ul>

    </section>
   
   </div>
  );
}

export default page
