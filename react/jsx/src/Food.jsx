import React from 'react'
const img = "https://picsum.photos/200"
function Heading(){
  return <h1 className='heading' contentEditable="true">My Favourite foods </h1>
}
function Food() {
  return (
    <div>
        
        <div >
          <Heading/>
            <img className='food-img' alt='burger' src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'></img>
            <img className='food-img' alt='momos' src='https://static.toiimg.com/thumb/msid-87930581,imgsize-211826,width-800,height-600,resizemode-75/87930581.jpg'></img>
            <img className='food-img' alt='pizza' src='https://www.mapsofindia.com/ci-moi-images/my-india/Momos.jpg'></img>
            <img className='food-img' alt='random' src={img}></img>
        </div>
        {/* <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Momos</li>
        </ul> */}
    </div>
  )
}

export default Food