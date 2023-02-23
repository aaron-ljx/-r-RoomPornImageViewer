import React from 'react'

const RoomPorn = (props) => {
  return (
    <div class = "container">
    {
      props.img.map(i => {
          return (
                <div key={i.data.url}>
                <img src = {i.data.url} />
                </div>
          )
      })
    }
    </div>
  )
}

export default RoomPorn

export async function getStaticProps() {
    const response = await fetch('https://www.reddit.com/r/RoomPorn.json?limit=50')
    const data = await response.json()
    console.log(data.data.children)
  
    return {
        props: {
            img: data.data.children
        }
    }
  }