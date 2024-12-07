import { MdDoubleArrow } from "react-icons/md";


 const Footer = () => {
    return (

<footer className="bg-[#000000] text-[#FAFAFA] body-font  ">
  <div className="container  py-24 mx-auto ">
    <div className="flex flex-wrap md:text-left text-center">
      <div className="lg:w-1/6 md:w-1/2   ">
        <h2 className="title-font font-bold text-[#FAFAFA] tracking-widest text-sm mb-3">Exclusive</h2>
          <p className="text-[#FAFAFA]">Subscribe</p>
          <p className="text-[#FAFAFA] text-[14px]">Get10% off your first order</p>
          <div className='border-[2px] text-sm flex  bg-[#685050]'>
          <input type='text'placeholder='Enter your email '   className='w-[217px] h-[48px] pl-[16px] pt-[12px] p-[12px] font-12 bg-[#000000] '></input>
          <MdDoubleArrow />
          </div>

        
      </div>
      
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li><a className="text-[#FAFAFA]">First Link</a></li>
          <li><a className="text-[#FAFAFA]">Second Link</a></li>
          <li><a className="text-[#FAFAFA]">Third Link</a></li>
          <li><a className="text-[#FAFAFA]">Fourth Link</a></li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li><a className="text-[#FAFAFA]">First Link</a>
          </li>
          <li><a className="text-[#FAFAFA]">Second Link</a>
          </li>
          <li><a className="text-[#FAFAFA]">Third Link</a>
          </li>
          <li><a className="text-[#FAFAFA]">Fourth Link</a></li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li><a className="text-[#FAFAFA]">First Link</a></li>
          <li><a className="text-[#FAFAFA]">Second Link</a></li>
          <li><a className="text-[#FAFAFA]">Third Link</a></li>
          <li><a className="text-[#FAFAFA]">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#FAFAFA]">First Link</a>
          </li>
          <li>
            <a className="text-[#FAFAFA]">Second Link</a>
          </li>
          <li>
            <a className="text-[#FAFAFA]">Third Link</a>
          </li>
          <li>
            <a className="text-[#FAFAFA]">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
         </div> 
          </div>
          </div>
          </div>
            <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-gray-600"
 ></label>
             <div className="bg-gray-100">
    <div className="container items-center justify-center  mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500   text-sm text-center">
        © 2020 Tailblocks 
      </p>
      
    </div>
  </div>
</footer>
)
};
export default Footer
