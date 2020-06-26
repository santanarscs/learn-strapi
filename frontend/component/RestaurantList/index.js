import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Link from 'next/link'

import { Card, CardBody,CardImg,CardText, CardTitle } from 'reactstrap'

const GET_RESTAURANTS = gql`
  query allRestaurants {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;
function RestaurantList() {
  const search = ""
  const { loading, error, data, fetchmore} = useQuery(GET_RESTAURANTS, {
    notifyOnNetworkStatusChange: true
  });
  if (error) return "Error loading restaurants";
  if(data && data.restaurants) {
    const searchQuery = data.restaurants.filter(query =>
      query.name.toLowerCase().includes(search)
    );
    console.log(searchQuery)
    return (
      <>
      <div>
        <div className="h-100 flex">
          {searchQuery.map(res => (
            <Card
              style={{ width: "30%", margin: "0 10px" }}
              className="h-100"
              key={res.id}
            >
              <CardImg
                top={true}
                style={{ height: 250 }}
                src={`http://localhost:1337${res.image[0]?.url}`}
              />
              <CardBody>
                <CardTitle>{res.name}</CardTitle>
                <CardText>{res.description}</CardText>
              </CardBody>
              <div className="card-footer">
                <Link
                  as={`/restaurants/${res.id}`}
                  href={`/restaurants?id=${res.id}`}
                >
                  <a className="btn btn-primary">View</a>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <style jsx global>
          {`
            .flex {
              display: flex
            }
            a {
              color: white;
            }
            a:link {
              text-decoration: none;
              color: white;
            }
            a:hover {
              color: white;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </div>
     
      </>
    )
  }
  return <div>Carregando...</div>
}
export default RestaurantList
