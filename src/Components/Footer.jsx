import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
          <Card className="text-center" bg="dark" variant="dark" text="light" fixed="bottom">
            <Card.Header>08039 Barcelona - 93 393 39 93</Card.Header>
            <Card.Body>
              <Card.Title>Sigue todas las novedades en nuestras redes sociales:</Card.Title>
            <Card.Text>
              <a target="_blank" rel="noreferrer" className='xxss' href='https://www.instagram.com/'>Instagram</a> | 
              <a target="_blank" rel="noreferrer" className='xxss' href='https://www.facebook.com/'> Facebook</a> | 
              <a target="_blank" rel="noreferrer" className='xxss' href='https://www.tiktok.com/es/' > TikTok</a> 
            </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Copyright &copy; Mi Propio Café - Marc Vitoria Sánchez</Card.Footer>
          </Card>
  )
}

export default Footer