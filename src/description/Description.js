import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../data';
import { Button } from 'react-bootstrap';
function Description() {
 let {MovieTitle}= useParams();

 let film= data.find ((film)=>film.title.includes(MovieTitle));
 console.log(film);
 let {description} = film
     return (
    <div>
{description}
<div>
<Button> <Link style={{color:'white'}} to="/" > Back Home </Link>
     </Button>
</div>
    </div>
  )
}

export default Description