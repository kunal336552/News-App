import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = ({className}) => {
  const {setNews,fetchNews} = useNewsContext();
    
    const category = ['business','entertainment','general','health','science','sports','technology']

    const handleClick = async(e) =>{
      const cat = e.target.value;
      const data =await fetchNews(`/everything?q=${cat}`)
      console.log(data)
            setNews(data.articles);
    }
  return (
    <div className={`${className}`}>
    <Wrapper>
    <div className={`w-fit m-auto flex max-w-full overflow-x-auto px-4 scrollbar-none gap-5 `}>
    {category.map((category)=>(
        <button onClick={handleClick} key={category} value={category} className="btn btn-primary">{category}</button>
    ))}
    </div>
    </Wrapper>
    </div>
  )
}

export default Category
