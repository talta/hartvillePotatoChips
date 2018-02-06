import React from 'react';
import styles from './home.css'

const Home= function(props){
	return (
		<div>
			<p className='text'> Making great Kettle Cooked Potato Chips runs deep in our family. In 1970, Ted purchased his first potato chip company in Kenmore, OH, making multiple brands that were loved throughout the area. One of those brands was Hartville Potato Chips. Selling the business in 1991, Ted traveled the world helping others perfect the Kettle Cooked Potato Chip.  </p>
			<p className='text'>Now, with the help of his cousins, the family is back at it! We’re making a great tasting Kettle Cooked Potato Chip that will bring back memories of the way chips used to be made. After more than two decades of being away from the business, we hope you enjoy our new Hartville Potato Chip!</p>
			<div>
				<div className='Signature'>
					<p className='Name'>Ted Robb</p>
					<p className='NameTitle'>1st Generation Chip Maker</p>
				</div>
				<div className='Signature'>
					<p className='Name'>Paul & Anthony LaGuardia</p>
					<p className='NameTitle'>2nd Generation Chip Makers</p>
				</div>
			</div>
		</div>
		)
		
}



export default Home