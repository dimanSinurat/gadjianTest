import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Pagination from '../components/Pagination';

export default function Personnel() {
  let [users, setUsers] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(4);
  let [empty, setEmpty] = useState(false);
 
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=9'
    })
    .then(({data}) => {
      setUsers(data.results)
    })
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers =  users.slice(indexOfFirstPost, indexOfLastPost); 
  const total = users.length
  const nextPage = () => {
    if (currentPage <= total){
      setEmpty(false);
      setCurrentPage(currentPage += 1)
    }
  }

  const previousPage = () => {
    if (currentPage === 2){
      setEmpty(true);
      setCurrentPage(currentPage -= 1);
    }
    if (currentPage > 1){
      setCurrentPage(currentPage -= 1);
    } 
  }

  return (
    <>
      <div className="bg-white min-w-12/12 h-full md:h-24 rounded-sm flex justify-between p-4 shadow-md flex-col md:flex-row  space-y-4 md:space-y-0">
        {/* sideA */}
        <div>
          <h1 className="text-2xl font-bold text-primary">PERSONNEL LIST</h1>
          <p className="text-gray-500">List of all personnels</p>
        </div>
        {/* end of sideA */}
        {/* side B */}
        <div className="flex md:space-x-2 md:items-center text-sm flex-col md:flex-row  space-y-2 md:space-y-0">
          {/* search input */}
          <div>
            <form method="GET">
              <div className="relative text-primary focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input type="search" name="q" className="p-2 text-sm w-full rounded-sm border border-2 pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Find Personnel" autoComplete="off" />
              </div>
            </form>
          </div>
          {/* add personnel button */}
          <div>
            <button className="bg-primary text-white p-2 rounded-sm font-semibold w-full ">
              ADD PERSONNEL
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-5 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        {/* end of sideB */}
      </div>

      {/* card */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container py-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
                users.length === 0 ? <p className="text-center">Loading</p> : 
                currentUsers.map((el, idx) => (
                  <Card
                   avatar={el.picture.large}
                   firstName={el.name.first}
                   lastName={el.name.last}
                   phone={el.phone}
                   birthDate={el.dob.date}
                   email={el.email}
                   key={idx}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </div>
      <Pagination
       next={nextPage}
       previous={previousPage}
       empty={empty}
      />
    </>
  )
}
