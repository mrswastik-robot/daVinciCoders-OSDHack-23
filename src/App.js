// eslint-disable-next-line no-unused-expressions
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {Link} from 'react-router-dom';
import "./App.css";
import Spline from "@splinetool/react-spline";
import { useState, useRef, useEffect } from "react";
// import chatbot from './script';
// import axios from 'axios';
// import $ from 'jquery';
import UdemyIcon from './icons/UDMY_BIG.png';
import CourseraIcon from './icons/COUR_BIG.png';
import GfgIcon from './icons/gfg_BIG.png';
import chatbotpng from './icons/chatbot.png';

import Cards from "./components/Cards";

import WebDevUdemy from './data/WebDev/WebDevUdemy.json';
import WebDevCoursera from './data/WebDev/WebDevCoursera.json';
import WebDevGfg from './data/WebDev/WebDevGfg.json';

import DsaUdemy from './data/DSA/dsaUdemy.json';
import DsaCoursera from './data/DSA/dsaCoursera.json';
import DsaGfg from './data/DSA/dsaGfg.json';


import DataSciGFG from './data/DataScience/dataSciGFG.json';
import DataSciUdemy from './data/DataScience/dataSciUdemy.json';
// import DataSciCoursera from './data/DataScience/dataSciCoursera.json';


import CyberUdemy from './data/CyberSecurity/cyberUdemy.json';
import CyberCoursera from './data/CyberSecurity/cyberCoursera.json';




import aiUdemy from './data/AI/aiUdemy.json';
import aiCousera from './data/AI/aiCoursera.json'


import javaUdemy from './data/Java/javaUdemy.json';

// import Chatbot from "./components/Chatbot";
import MockData from './data/MOCK_Searches.json';


function App() {
  // const [UdemyWebs, setUdemyWebs] = useState([]);

  // const getData = () => {
  //   fetch("http://localhost:3000/WebDevUdemy.js", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((myjson) => {
  //       setUdemyWebs(myjson);
  //       console.log(myjson);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onSearch =(searchTerm) => {
    setSearch(searchTerm);

  }

  const [search, setSearch] = useState('');
  const [udemy, setUdemy] = useState([]);
  const [coursera, setCoursera] = useState([]);
  const [gfg, setGfg] = useState([]);

  const [open, setOpen] = useState(false);
  const [criteria, setCriteria] = useState('');

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleAnchor = (e) => {
    e.preventDefault();
  }


  const handleSearch = (e) => {
    e.preventDefault();

    if (search.includes("web") || search.includes("develop") || search.includes("full stack"))
    {
      setUdemy(WebDevUdemy);
      setCoursera(WebDevCoursera);
      setGfg(WebDevGfg);
    }

    if(search.includes("dsa") || search.includes("data") || search.includes("structure"))
    {
      setUdemy(DsaUdemy);
      setCoursera(DsaCoursera);
      setGfg(DsaGfg);
    }

    if(search.includes('science') || search.includes('Science'))
    {
      setGfg(DataSciGFG);
      setUdemy(DataSciUdemy);

    }


    if(search.includes('cyber') || search.includes('Cyber') || search.includes('security') || search.includes('Security') || search.includes('hacking') || search.includes('Hacking') || search.includes('ethical') || search.includes('Ethical'))
    {
      setUdemy(CyberUdemy);
      setCoursera(CyberCoursera);
    }


    if(search.includes('artificial') || search.includes('Artificial') || search.includes('intelligence') || search.includes('Intelligence') || search.includes('AI') || search.includes('ai'))
    {
      setUdemy(aiUdemy);
      setCoursera(aiCousera);
    }

    if(search.includes('java') || search.includes('Java'))
    {
      setUdemy(javaUdemy);
    }

   
  }


  function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}


udemy.sort(GetSortOrder(criteria)); //Pass the attribute to be sorted on    

  return (
    <div>
      <div className=" canvas">
      <Spline scene="https://prod.spline.design/CyT6S8XXMhJpOhur/scene.splinecode" />
  
      </div>

      <form
        className=" flex space-x-2 items-center justify-center rounded-full py-2 px-4 bg-[#7870E4] max-w-sm mx-auto mt-[36%]  mr-[57.5%]"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search..."
          className=" flex-1 outline-none bg-transparent text-white placeholder:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button  type="submit" onClick={() => onSearch(search)}>
          <MagnifyingGlassIcon className=" h-3 w-3 bg-transparent text-black " />
        </button>

        </form>






        <div className="dropdown flex flex-col w-[280px] ml-[17rem]">
          {MockData
            .filter((item) => {
              const searchTerm = search.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>


      

      <a href="https://jolly-stroopwafel-b49a59.netlify.app/" className=" rounded-full" ><img className=" h-[5rem] w-[5rem] ml-5 mt-9 shadow-2xl hover:-rotate-45 rounded-full fixed" src={chatbotpng}/></a>


        <h2 class="text-2xl mt-[13.5rem] ml-[2rem] font-extrabold text-gray-900">OUR COURSES</h2>


        <div className="dropdown">
                <button onClick={handleOpen} className='bg-blue-200 p-2 rounded'>FILTER BY</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button className='bg-indigo-100 w-[80px] m-1 rounded' onClick={() => setCriteria('price')}>price</button>
                        </li>
                        <li className="menu-item">
                            <button className='bg-indigo-100 w-[80px] m-1 rounded' onClick={() => setCriteria("rating")} >rating</button>
                        </li>
                    </ul>
                ) : null}

            </div>
          


          
        <section class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-4 mt-[5.4rem] mb-8">
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">


        {udemy.length>0 && <><img src={UdemyIcon} alt="error icon" /><span class="h-1 w-[65rem] bg-purple-600 mt-[3rem]" /><span></span>
          <span></span></>}

          
            {udemy &&
            udemy.length > 0 &&
            udemy.map((uweb) => {
              return (
                
                  <a href={uweb.image} target="_blank">
                   <Cards
                    title={uweb.title}
                    price={uweb.price}
                    image={(uweb.img) ? (uweb.image) : ("https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png")}
                    rating={uweb.rating}
                    about={uweb.about}
                    />
                    </a>
                    
                    

                
               
              )
            })}

            </div>
            </section>

        
         
        <section class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-4 mt-[7rem] mb-8">
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">


            {coursera.length>0 && <><img src={CourseraIcon} alt="error icon" /><span class="h-1 w-[65rem] bg-blue-600 mt-[1rem]" /><span></span>
          <span></span></>}
            {coursera &&
              coursera.length > 0 &&
              coursera.map((cweb) => {
                return (
                  <a href={cweb.image} target="_blank">
                  <Cards
                    title={cweb.title}
                    price={cweb.price}
                    image={cweb.img ?? 'https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg'}
                    rating={cweb.rating}
                    about={cweb.about}
                  />
                  </a>
                )
              })}

              </div>
              </section>





             <section class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-4 mt-[5] mb-12">
             <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">  
            {gfg.length>0 && <><img src={GfgIcon} alt="error icon" /><span class="h-1 w-[65rem] bg-green-600 mt-[4rem]" /><span></span>
          <span></span></>}
            {gfg &&
              gfg.length > 0 &&
              gfg.map((cweb) => {
                return (
                  <a href={cweb.image} target="_blank">
                  <Cards
                    title={cweb.title}
                    price={cweb.price}
                    image={(cweb.img) ? (cweb.img) : ("https://img.icons8.com/color/512/GeeksforGeeks.png")}
                    rating={cweb.rating}
                    about={cweb.about}
                  />
                  </a>
                )
              })}

              </div>
              </section>


              


        {/* </div>
      </section> */}

      

    


    </div>
  );
}

export default App;
