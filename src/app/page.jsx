import CategoryMenu from "@/components/CategoryMenu";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex mx-auto bg-[whitesmoke] min-h-screen">
      <div className="">
      <CategoryMenu />
      </div>
     <div>
     <Products />
     </div> 
     
    </div>
  );
}
