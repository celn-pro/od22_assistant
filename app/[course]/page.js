import { SideBar } from "../../components"
async function getData() {
    const res = await fetch('https://api.example.com/...', { next: { revalidate: 3600 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }    
    
    export default function Page({ params }) {
        return <div>
          <SideBar currentPath={params.course} />
          <div className="absolute left-[200px] top-[70px] right-[20px] bottom-[20px] px-[20px] py-[20px]">
            <div className="flex justify-center items-center h-full">
              <div>please choose module</div>
            </div>
          </div>
        </div>
    }