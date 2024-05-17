// import { BallTriangle } from 'react-loader-spinner'

// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// export default function All() {

//   const [Lodaing, setLodaing] = useState(true)




//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:3005/posts');
//       const data = await response.json();
//       setPosts(data);
//     };
//     fetchData();
//   }, []);

//   return <>
//   {Lodaing ?
//         <div className="vh-100 w-100 d-flex justify-content-center align-items-center">

//           <BallTriangle
//             height={100}
//             width={100}
//             radius={5}
//             color='#4fa94d'
//             wrapperClass={{}}
//             wrapperStyle=""
//             visible={true}

//           />
//         </div> : <div className="container" >
//       <Container>
//         <Row xs={2} xl={4} >
//           {posts.map((post) => (
//             <Col key={post.id} >
//               <Card className='w-100 h-100 '>
//                 <Link to={`/Allpage/${post.id}`} >   <img className='w-100 h-100 ' src={post.img} alt="" /></Link>

//                 <Card.Body>
//                   <Card.Title>{post.title}</Card.Title>
//                   <Card.Text>{post.prefix}</Card.Text>
//                   <Link to={`/Allpage/${post.id}`}> <Button className='me-auto'>{post.price}</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//     </div>

//           }  </>;
// }

import { BallTriangle, Watch } from 'react-loader-spinner'

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function All() {

  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3005/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <>
    {loading ?
      <div className="vh-100 w-100 d-flex justify-content-center align-items-center">

        {/* <BallTriangle
            height={100}
            width={100}
            radius={9}
            color='#4fa94d'
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}

          /> */}
        (<Watch
          visible={true}
          height="100"
          width="100"
          radius="48"
          color="#000000"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />)
      </div> : <div className="container" >
        <Container>
          <Row xs={2} xl={4} >
            {posts.map((post) => (
              <Col key={post.id} >
                <Card className='w-100 h-100 '>
                  <Link to={`/Allpage/${post.id}`} >   <img className='w-100 h-100 ' src={post.img} alt="" /></Link>

                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.prefix}</Card.Text>
                    <Link to={`/Allpage/${post.id}`}> <Button className='me-auto btn-light'>{post.price}</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

      </div>

    }  </>;
}