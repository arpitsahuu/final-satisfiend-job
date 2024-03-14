import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
const inter = Inter({ subsets: ["latin"] });
import { MdReviews } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { currentStudent } from "@/redux/actions/studentAction";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CiLocationOn } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  var array = [1, 2, 3, 4, 5, 6];
  const router = useRouter();
  const { student, error, loading } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setsearchLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/user`;

  const searchJobs = async () => {
    const response = await axios.post(
      `${basePath}/search?q=${searchTerm}&location=${searchLocation}`
    );
    setJobs(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    dispatch(currentStudent());
  }, []);

  const redirectToJob = () => {
    router.push("/Job");
  };

  const onJobClick = (id) =>{
    if(!student){
      router.push("./loginUser")
    }
    router.push(`./details/${id}`)
  }

  useEffect(() => {
    if (searchTerm.trim() === "" && searchLocation.trim() === "" ) {
      setJobs([]);
    }
  }, [searchTerm, searchLocation]);

  return (
    <div className="w-[100vw]">
      <Layout>
        <Container bgColor={""}>
          <h2 className="mt-28 sm:mt-28  sm:text-5xl  text-gray-600 py-5 text-center font-bold text-2xl px-11 ">
            Find your dream job now
          </h2>
          <h4 className=" font-medium uppercase text-center text-sm mt-2 sm:text-lg">
            SATISFIED JOBS for you to exploer
          </h4>
          <div
            id="serchmaindiv"
            className=" rounded-xl  serchperent bg-white h-16  m-auto flex mt-8 relative "
          >
            <button id="mainserchbtnserch"
              className=" absolute bg-[#4080ED] py-2 px-6 rounded-2xl top-[12px] right-3 text-white "
              onClick={searchJobs}
            >
              Serch
            </button>

            <div className="absolute top-[25px] left-5 ">
              <FaSearch id="searchicanbor" className="text-[15px]" />
            </div>

            <input
              id="search"
              type="text"
              className=" focus:outline-none"
              placeholder="Enter Job, skills and designations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h6 className=" flex gap-1 items-center text-[20px] text-slate-300">|{<IoLocationOutline className="text-[23px]" />}</h6>
            <input
              id="locationmaindiv"
              type="text"
              className=" border-l-1 focus:outline-none"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setsearchLocation(e.target.value)}
            />

            {/* <input
              id="search"
              type="text"
              className=" rounded-xl py-10 pt-8 text-[10px] sm:text-base"
              placeholder="enter skills/ designations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute top-[21px] left-5 ">
              <FaSearch className="text-[15px]" />
            </div>
            <button
              className=" absolute bg-[#2ea1e0] py-2 px-6 rounded-2xl top-[10px] right-3 text-white "
              onClick={searchJobs}
            >
              Serch
            </button> */}
            {jobs?.length != 0 && (
              <div
                id="serchdiv"
                className=" absolute top-[110%] w-[800px] h-[18vh] rounded-xl  bg-white px-3 pt-4 overflow-y-auto "
              >
                {jobs?.map((job) => {
                  return (
                    <div className="px-3 py-2 flex justify-between gap-3 border border-slate-300 rounded-3xl  my-1" onClick={() => onJobClick(job._id)} >
                      <div className="flex gap-1">
                        <h6>{job.title}</h6>
                        <p id="serchdivtype" className="text-[#424242]">
                          | {job.jobType}
                        </p>
                      </div>
                      <h6 id="serchdivlocation">{job.location}</h6>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="w-full flex justify-center gap-5 mt-9 text-slate-600">
            <button className="serchbtn border rounded-3xl px-4 py-1 border-slate-300" id="mentbtn">
              ment stack developer
            </button>
            <button className="border rounded-3xl px-4 py-1 border-slate-300">
              full stack develooper
            </button>
            <button
              id="serchbtnth"
              className="serchbtn border rounded-3xl px-4 py-1 border-slate-300"
            >
              Front end developer
            </button>
          </div>

          <div className="w-full flex justify-center items-center gap-5 mt-24 sm:mt-32">
            <button className="effectSerchbtnone  font-medium py-4 px-8 border border-slate-300  rounded-md flex items-center gap-2">
              {" "}
              Remote <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" effectSerchbtntwo font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              MNC <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2" id="effectSerchbtnthree">
              Analytics <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" font-medium py-4 px-8 border border-slate-300 flex items-center gap-2">
              Engineering <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              Fresher <FaChevronRight className=" text-slate-600" />
            </button>
            <button className="effectSerchbtnone font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              Fortune 500 <FaChevronRight className=" text-slate-600" />
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-5  mt-5">
            <button className="effectSerchbtnone font-medium py-4 px-8 border border-slate-300  rounded-md flex items-center gap-2">
              Remote <FaChevronRight className=" text-slate-600" />
            </button>
            <button className="effectSerchbtntwo font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              MNC <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              Analytics <FaChevronRight className=" text-slate-600" />
            </button>
            <button className=" font-medium py-4 px-8 border border-slate-300 flex items-center gap-2" id="effectSerchbtnfour">
              Engineering <FaChevronRight className=" text-slate-600" />
            </button>
            <button className="effectSerchbtnone font-medium py-4 px-8 border border-slate-300 rounded-md flex items-center gap-2">
              Fresher <FaChevronRight className=" text-slate-600 " />
            </button>
          </div>

          <div className="mt-16 sm:mt-32">
            <h2 className="sm:text-3xl text-xl text-center mt-3 sm:mt-5">
              SATISFIED JOB TOP FEATURS
            </h2>
            <div></div>
          </div>

          {/* <div
          className="w-full  bg-cover bg-center h-[50vh] mt-7"
          style={{ backgroundImage: `url("./S.png")` }}
        >
        </div> */}
          {/* <div className="w-full flex">
        <button onClick={() => redirectToJob()} className="bg-[#3871ff] text-white px-4 py-3 rounded-xl mt-3 ">Search Jobs</button>

        </div> */}
          <div
            id="feature"
            className="w-full sm:gap-20 flex flex-col justify-center items-center  sm:text-center mt-14 sm:mt-20 sm:flex-row gap-5"
          >
            <div className="w-[250px] h-[300px]  rounded-lg text-white   bg-[#2ea1e0] flex flex-col justify-center items-center">
              <IoNewspaper className="text-[70px]" />
              <h6 className=" mt-3">Resume Builder</h6>
              <p className="text-[#ddd]">Build your resme in few steps </p>
            </div>
            <div className="w-[250px]   h-[300px]  rounded-lg  bg-[#fbc750] flex flex-col justify-center items-center text-white">
              <IoIosSchool className="text-[70px]" />
              <h6 className=" mt-3">Qualified Student</h6>
              <p className="">Find best Qualified Student</p>
            </div>

            <div className="w-[250px]   h-[300px]  rounded-lg  bg-[#35cc61] flex flex-col justify-center items-center text-white">
              <AiOutlineSafety className="text-[70px]" />
              <h6 className=" mt-3">Verified Jobs</h6>
              <p className="text-[#ddd]">100 verified and save jobs%</p>
            </div>

            {/* <div className=" w-[100vw] mt-20 flex items-center justify-center   ">
            <div className="w-[200px] md:w-[300px] flex-shrink-0 h-[300px] px-4 py-6 rounded-lg  bg-[#fbc750]">
              
              
                   
            </div>
            <div className="w-[200px] md:w-[300px] flex-shrink-0 h-[300px] px-4 py-6 rounded-lg  bg-[#3871ff] relative text-white ms-5 sm:ms-8">
                
            </div>
            
            <div  className="w-[350px] md:w-[400px] flex-shrink-0 h-[300px] py-[25px] md:py-[30px] px-[10px] md:px-[40px]  ml-[40px] bg-[#35cc61] rounded-lg flex justify-between flex-col">
                

                  
            </div>
      
            
          </div> */}
          </div>

          {/* <div className="w-[200px] md:w-[300px] flex-shrink-0 h-[300px] px-4 py-6 rounded-lg  bg-[#3871ff] relative text-white ms-5 sm:ms-8">
              <div className="flex gap-4 border-b-2 pb-3 border-slate-200 ">
                  <img src="./googlelogo.png" className="w-[50px] rounded-lg" alt="" />
                  <div className="flex flex-col ms-2">
                    <h3 className=" text-white ">MERN Web Developer</h3>
                    <h6 className=" text-white text-start ">Google</h6>
                  </div>
              </div>
              <div className="px-3 pt-4">
              <div className="flex items-center mb-1">
                <MdWorkOutline className="text-white" /> 
                <p className="ms-2">5 day</p>
                </div>
                <div className="flex items-center  mb-1">
                <GiTakeMyMoney className="text-white" /> 
                <p className="ms-2">$10000 m</p>
                </div>
                <div className="flex items-center  mb-1">
                <CiLocationOn />
                <p className="ms-2">Banglore</p>
                </div>
                
                <div className="flex items-center  mb-1">
                <GiTakeMyMoney className="text-white" /> 
                <p className="ms-2">$10000/inhand</p>
                </div>
              </div>
              <div className=" flex mt-3 ">
                <div className=" p-1  ">html</div>
                <div className="text-white  p-1  ">CSS</div>
                <div className=" p-1  ">JavaScript</div>
                <div className=" p-1  ">React</div>
                <div className="  p-1  "></div>
              </div>
              
              <div className=" absolute bottom-5 w-full px-5 left-0 text-white flex justify-between">
                <h6>$98000/year</h6>
                <h6>India</h6>
              </div>     
            </div> */}
        </Container>
        {/* <Container bgColor={"#190B28"}>
          <div className="min-h-[95vh] md:min-h-[90vh] flex justify-center items-center md:justify-between">
            <div className=" pt-[70px] px-[150px]  flex-col gap-[80px] hidden md:flex">
              <p className="text-white text-4xl text-[#FFD166]">
                Get job in just 3 steps...
              </p>

              <div className="flex flex-col gap-[20px]">
                <p className="text-white text-4xl font-semibold tracking-[2px]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
                <p className="text-white text-4xl font-semibold tracking-[2px] opacity-[0.8]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
                <p className="text-white text-4xl font-semibold tracking-[2px] opacity-[0.5]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
              </div>
            </div>
            <div className="mobile pt-[70px] px-[20px]">
              <img src="./a1.webp" alt="" className="w-[300px]" />
            </div>
          </div>
        </Container> */}

        <div className=" md:py-[80px]">
          <Container bgColor={"#F4F2F6"}>
            <p className="sm:text-3xl text-xl font-[900] text-center mt-20 py-[10px] md:py-[10px] mb-16">
              Job Openings in Top companies
            </p>
          </Container>
          <div className=" w-[100vw] flex items-center  overflow-x-auto ">
            {array.map((e, i) => (
              <>
                <div
                  key={i}
                  className="w-[250px] md:w-[300px] flex-shrink-0 h-[230px] py-[25px] md:py-[25px] px-[10px] md:px-[20px]  ml-[30px]  rounded-lg  border-gray-50 hover:border-gray-200  hover:shadow-md border border-slate-300"
                >
                  <div className="flex gap-4 pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dcj2gzytt/image/upload/v1710311927/avaters/padkgv4yvswh2qzu0ybv.png"
                      className="w-[45px] rounded-lg"
                      alt=""
                    />
                    <div className="flex flex-col ms-2">
                      <h3 className="  ">MERN Web Developer</h3>
                      <h6 className=" text-[#424242] text-start ">Google</h6>
                    </div>
                  </div>
                  <div className=" md:text-sm flex mt-4 ms-2 sm:gap-2 gap-1 text-[8px]  text-[]">
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">html</div>
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">CSS</div>
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">
                      JavaScript
                    </div>
                    <div className=" px-2 py-1 rounded-md bg-[#ddd]">React</div>
                  </div>
                  <div className="w-full mt-16 text-[#424242]   flex justify-between">
                    <h6>$98000/year</h6>
                    <h6>India</h6>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <div className="w-full text-center mt-16">
            <button className="btn flex items-center justify-center">
              <span className="flex items-center gap-1 px-2">
                <p>View all</p>
                <RiArrowRightSLine className="text-lg" />
              </span>
            </button>
          </div> */}
        </div>

        <div className="">
          <Container bgColor={"#F4F2F6"}>
            <p className="sm:text-3xl text-xl font-[900] text-center  py-[10px] md:py-[10px] mb-16 mt-8 sm:mt-1">
              Recent Job Openings
            </p>
          </Container>
          <div className=" w-[100vw] flex items-center  overflow-x-auto ">
            {array.map((e, i) => (
              <>
                <div
                  key={i}
                  className="w-[250px] md:w-[300px] flex-shrink-0 h-[230px] py-[25px] md:py-[25px] px-[10px] md:px-[20px]  ml-[30px] rounded-lg border-gray-50 hover:border-gray-200  hover:shadow-md border border-slate-300 "
                >
                  <div className="flex gap-4 pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dcj2gzytt/image/upload/v1710311927/avaters/padkgv4yvswh2qzu0ybv.png"
                      className="w-[45px] rounded-lg"
                      alt=""
                    />
                    <div className="flex flex-col ms-2">
                      <h3 className=" ">MERN Web Developer</h3>
                      <h6 className=" text-[#424242] text-start ">Google</h6>
                    </div>
                  </div>
                  <div className=" md:text-sm flex mt-4 ms-2 sm:gap-2 gap-1 text-[8px]  ">
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">html</div>
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">CSS</div>
                    <div className="px-2 py-1 rounded-md bg-[#ddd] ">
                      JavaScript
                    </div>
                    <div className=" px-2 py-1 rounded-md bg-[#ddd]">React</div>
                  </div>
                  <div className="w-full mt-16 text-[#424242]   flex justify-between">
                    <h6>$98000/year</h6>
                    <h6>India</h6>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="w-full text-center my-16 ">
            <button className=" m-auto text-white py-3 px-4 rounded-md  font-medium bg-[#4080ED] flex items-center justify-center">
              <span className="flex items-center gap-1 px-2">
                <p>View all</p>
                <RiArrowRightSLine className="text-lg" />
              </span>
            </button>
          </div>
        </div>

        {/* <div className="min-h-[90vh] md:py-[80px]">
          <Container bgColor={"#F4F2F6"}>
            <p className="text-3xl font-[900] text-center py-[20px] md:py-[40px]">
              Job Openings in Top companies
            </p>
          </Container>
          <div className=" w-[100vw] min-h-[50vh] flex items-center  overflow-x-auto ">
            {array.map((e, i) => (
              <>
                <div
                  key={i}
                  className="w-[350px] md:w-[400px] flex-shrink-0 h-[300px] py-[25px] md:py-[30px] px-[10px] md:px-[40px]  ml-[40px] bg-white rounded-lg flex justify-between flex-col"
                >
                  <img src="./c1.webp" className="w-[80px]" alt="" />

                  <div className="flex flex-col gap-3">
                    <p className="subheading">Baja Finaxe limahpeoje</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor{" "}
                    </p>
                  </div>
                  <div>
                    <button className="font-[500] text-[18px] text-green flex items-center ">
                      <span>View jobs</span>
                      <RiArrowRightSLine />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="w-full text-center">
            <button className="btn flex items-center justify-center">
              <span className="flex items-center gap-1 px-2">
                <p>View all</p>
                <RiArrowRightSLine className="text-lg" />
              </span>
            </button>
          </div>
        </div> */}

        {/* <div className="min-h-[90vh] md:h-[80vh] flex items-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-[100vw] md:w-[30vw] px-[10px] md:px-0 text-white h-[350px] md:h-[450px]  bg-green md:flex items-center justify-center flex-col relative">
              <div className=" text-white  font-semibold">
                <div className="icon w-[70px] my-[25px] bg-transparent rounded-ful flex items-center justify-center h-[70px]">
                  <MdReviews className="text-3xl" />
                </div>
                <h1 className="text-[30px]">
                  Join the community <br /> of 5 crore satisfied <br /> job
                  seekers...
                </h1>
                <div className="rating flex gap-1 my-[20px] items-center  ">
                  <p>Play Store Ratings</p>
                  <span className="flex gap-2 text-[#FFB400]">
                    <IoStar /> <IoStar /> <IoStar />
                    <IoStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[100vw] pl-[350px] md:pl-0 px-[20px] md:w-[70vw] h-[450px] md:px-[20px] flex items-center justify-center gap-3 overflow-x-auto">
              {array.map((e,i) => {
                return (
                  <>
                    <div key={i} className="h-[280px] flex-shrink-0 w-[90vw] md:w-[500px] bg-white rounded-lg px-[22px]">
                      <div className="gap-2 text-black  font-[500]">
                        <div className="flex items-center  gap-3">
                          <img
                            src="./profile.jpg"
                            className="w-[90px] -mt-[20px] h-[90px] rounded-md"
                            alt=""
                          />

                          <div>
                            <div className="flex gap-3 py-[11px] h-fit">
                              <p className="text-md font-semibold">
                                Aniket Patidar
                              </p>
                              <div className="text-green font-[500] flex  items-center">
                                <TiTick />
                                <p className=" ">Placed</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <p>4.5</p>
                              <span className="flex text-[#FFB400]">
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-[22px] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique alias aperiam maxime iure in labore sapiente
                        eligendi explicabo assumenda quibusdam modi vitae, odio
                        sint consequuntur! Quibusdam, doloremque. Nostrum,
                        deleniti qui!
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div> */}
      </Layout>
    </div>
  );
}
