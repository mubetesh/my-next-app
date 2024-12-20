
import Hello from "./components/hello";

export default function Home() {
  console.log("I am client or server?")
  return (
   <div>
    <h1 className="text-3xl items-center">Hello World!</h1>
    <Hello />
   </div>
  );
}
