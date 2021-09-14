import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Pagination from '../components/Pagination';
import HeaderBox from '../components/HeaderBox';

export default function Personnel() {
  let [users, setUsers] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(4);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=28'
    })
      .then(({ data }) => {
        setUsers(data.results)
      })
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const totalPage = Math.ceil(users.length / postsPerPage);
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage += 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage -= 1);
    }
  }

  return (
    <>
      <HeaderBox
       title="PERSONNEL LIST"
       subTitle="List of all personnel"
       buttonFor="ADD PERSONNEL"
       searchFor="Find Personnel"
      />

      {/* card */}
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

      <Pagination
        next={nextPage}
        previous={previousPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  )
}
