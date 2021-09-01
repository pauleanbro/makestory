import { useState } from 'react';

import { Stage, Layer } from 'react-konva';
import { Container, Row, Col } from 'react-bootstrap';

import { Menu } from './Components/Menu';

import IconUser from './Components/IconUser';
import BackgroundImage from './Components/BackgroundImage';
import NameUser from './Components/NameUser';
import CloseFriends from './Components/CloseFriends';
import Asked from './Components/Asked';


function App() {

  const [selectedId, selectShape] = useState(null);
  const [url, setUrl] = useState('https://static.vecteezy.com/ti/vetor-gratis/p1/2486289-gradiente-fundo-instagram-grátis-vetor.jpg');
  const [username, setUsername] = useState('username');
  const [urlIcon, setUrlIcon] = useState('https://inflact.com/img/noavatar.png');

  const [defaultBackgroundAttr, setDefaultBackgroundAttr] = useState({
    x: 0,
    y: 0,
    width: window.innerWidth * 0.23,
    height: window.innerHeight * 0.9
  });

  const [defaultAskedAttr, setDefaultAskedAttr] = useState({
    x: 40,
    y: 250,
  });

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3} className="bg-dark">
          <Menu
            setUrl={setUrl}
            setUsername={setUsername}
            setUrlIcon={setUrlIcon}
          />
        </Col>
        <Col sm={9}>
          <div className="Work" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
          >
            <div style={{
              backgroundColor: '#fff',
            }}>
              <Stage
                width={window.innerWidth * 0.23}
                height={window.innerHeight * 0.9}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
              >
                <Layer>
                  <BackgroundImage
                    src={url}
                    defaultAttr={defaultBackgroundAttr}
                    isSelected={'background' === selectedId}
                    onSelect={() => {
                      selectShape('background');
                    }}
                    onChange={(newAttrs) => {
                      setDefaultBackgroundAttr(newAttrs);
                    }}
                  />
                  {/* <Asked
                    defaultAttr={defaultAskedAttr}
                    isSelected={'asked' === selectedId}
                    onSelect={() => {
                      selectShape('asked');
                    }}
                    onChange={(newAttrs) => {
                      setDefaultAskedAttr(newAttrs);
                    }}
                  /> */}
                  <IconUser src={urlIcon} />
                  <NameUser username={username} />
                  {/* <CloseFriends /> */}
                </Layer>
              </Stage>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
