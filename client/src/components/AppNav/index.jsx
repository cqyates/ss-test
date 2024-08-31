import { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';

import LoginForm from '../LoginForm';

import Auth from '../../utils/auth';

const AppNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section style={{ width: '100%', position: 'relative' }}>
      {Auth.loggedIn() ? (
        <div
          style={{
            color: 'white',
            position: 'absolute',
            top: '5px',
            left: '5px',
          }}
        >
          <Nav.Link onClick={Auth.logout}>
            <h2>Logout</h2>
          </Nav.Link>
        </div>
      ) : (
        <div>
          <Nav.Link onClick={() => setShowModal(true)}>
            <h3>
              {' '}
              <a>Login</a>
            </h3>
          </Nav.Link>
        </div>
      )}
       <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </section>
  );
};

export default AppNav;
