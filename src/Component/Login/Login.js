import google from './images/unnamed.png'
import React from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";


    const { users, signInUsingGoogle } = useAuth()


    const googleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);

            });
    };
    return (
        <div>
            {users.email ? <h1>Hello {users.displayName}</h1> :
                <Container className="my-5">
                    <Row className="d-flex justify-content-center">
                        <Col style={{ maxWidth: "300px" }} className="my-5 py-5">
                            <div className="d-grid py-5">
                                <Button onClick={googleSignIn}
                                    variant="outline-dark">
                                    <img className="google-logo" src={google} alt="" />
                                    Login With Google
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </Container>

            }
        </div>
    );
};

export default Login;