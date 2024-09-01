import { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

import Auth from '../../utils/auth';

import './style.css';
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
              Login
            </h3>
          </Nav.Link>
        </div>
      )}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        className="modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav id="nav-btn" variant="pills">
                <Nav.Item>
                  <Nav.Link className="sub-link" eventKey="login" style={{backgroundColor: `var(--contrast-dark)`, margin: ".5rem", color: `var(--contrast-light)`}}>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="sub-link" eventKey="signup" style={{backgroundColor: `var(--contrast-dark)`, margin: ".5rem", color: `var(--contrast-light)`}}>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </section>
  );
};

export default AppNav;
