<<<<<<< HEAD
import { Container, Row, Col } from 'react-bootstrap';

const BootstrapTest = (props) => {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>{props.left}</Col>
        <Col>{props.right}</Col>
=======
import { Container, Row, Col, Carousel, Button, Form } from 'react-bootstrap';

const BootstrapTest = () => {
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://frontline.ru/sites/phc_ru.frontline.com/files/88-chto-nuzhno-znat-sobirayas-na-plyazh-M.jpg'
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://kubnews.ru/upload/iblock/21d/21de27a6fcd2d0e93149fd84b6d3266e.jpg'
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://www.purinaone.ru/dog/sites/default/files/2020-07/zuby-u-sobak-mobile-min_1.jpg'
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
>>>>>>> master
      </Row>
    </Container>
  );
};

export default BootstrapTest;
