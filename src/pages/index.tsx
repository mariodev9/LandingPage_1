import Nav from '@/components/Nav'
import { Category } from '@/components/common/Category/Category'

const CategoryList = [
  {
    title: "Laboratory",
    description: "Discovery Industry Solutions",
    image: "bg-laboratory"
  },
  {
    title: "Engineering",
    description: "Chemical Synthetic Fibers Metal",
    image: "bg-eng"
  },
  {
    title: "Lab Production",
    description: "Racks Exhibition system",
    image: "bg-prod"
  },
  {
    title: "Projects 3d",
    description: "Analysis Product Sketch",
    image: "bg-proyects"
  },
]

export default function Home() {
  return (
    <div className="h-screen ">
      {/* nav */}
      <div className=' fixed top-0 left-0 right-0 pt-3 px-5 z-50'>
        <div className='flex justify-center w-full '>
          <Nav/>
        </div>
      </div>
      {/* Categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {CategoryList.map((item, index) => (
          <Category key={item.title} position={index+1} {...item} />
        ))}
      </div>
    </div>

  )
}
