import React from 'react'
const img = "https://picsum.photos/200"
function Food() {
  return (
    <div>
        <h1 className='heading' contentEditable="true">My Favourite foods </h1>
        <div >
            <img className='food-img' src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'></img>
            <img className='food-img' src='https://static.toiimg.com/thumb/msid-87930581,imgsize-211826,width-800,height-600,resizemode-75/87930581.jpg'></img>
            <img className='food-img' src='https://www.mapsofindia.com/ci-moi-images/my-india/Momos.jpg'></img>
            <img className='food-img'src={img}></img>
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