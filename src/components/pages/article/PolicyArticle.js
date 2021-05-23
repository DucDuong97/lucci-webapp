import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPolicy } from '../home/Data';

function PolicyArticle() {

  const { id } = useParams();
  const [policy, setPolicy] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setPolicy(await getPolicy(id));
    }
    fetchData();
  }, [])

  return (
    <>
      <div class="e-intro">
        <div class="container bg-white box-shadow-16">
          <p class="title-no-bg text-left color-black">{policy.name}</p>
          {policy.content}
        </div>
      </div>
    </>
  )
}

export default PolicyArticle
