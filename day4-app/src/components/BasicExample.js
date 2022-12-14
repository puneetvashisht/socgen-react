import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;