import { FC } from 'react'
import Window from '../../../components/Window'
import Development from '../../../public/assets/about-me/process/icons/Development.svg'
import Test from '../../../public/assets/about-me/process/icons/Test.svg'
import CodeBlock from '../../../components/CodeBlock'

const Begin: FC = () => {
 const componentCode = `
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>
       Increment
      </button>
    </div>
  );
}`

 const testCode = `
test('renders initial count', 
 () => {
  const { getByText } = render(<Counter />);
  expect(getByText("Count: 8")).toBeInTheDocument();
 }
);
`

 return (
  <>
   <h1 className='xl-text mt-48 whitespace-pre-line text-center'>
    Let’s do the work
   </h1>
   <p className='hero-sub text-center text-slate-400'>
    Let&apos;s make the plan not only a plan
   </p>

   <div className='mx-auto mt-12 flex flex-col items-center gap-x-60 gap-y-12 lg:flex-row'>
    <div className='relative flex flex-col'>
     <Window className='w-full'>
      <CodeBlock
       code={componentCode}
       language='javascript'
      />
     </Window>
     <Window className='z-10 mb-auto ml-0 mt-0 w-full sm:-mt-12 sm:ml-12'>
      <CodeBlock
       code={testCode}
       language='javascript'
      />
     </Window>
    </div>

    <div className='flex flex-col items-center text-center lg:max-w-md lg:items-start lg:text-start'>
     <div className='w-fit bg-slate-800 px-2 py-2'>
      <Development className='h-fit w-16' />
     </div>
     <h2 className='md-text font-bold'>
      Development
     </h2>
     <p className='sm-text text-slate-400'>
      Build the product, respect the plan.
     </p>

     <div className='mt-12 w-fit bg-slate-800 px-2 py-2'>
      <Test className='h-fit w-16' />
     </div>
     <h2 className='md-text font-bold'>
      Test and test again
     </h2>
     <p className='sm-text text-slate-400'>
      When the product is completed, you have to
      make sure it works as expected, and it is
      realiable.
     </p>
    </div>
   </div>
  </>
 )
}

export default Begin
