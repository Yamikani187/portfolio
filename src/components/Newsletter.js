import { Alert } from "bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
            });
    };

    const clearFields = () => {
        setEmail("");
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>subscribe to our Newsletter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && (
                            <Alert variant="danger">{message}</Alert>
                        )}
                        {status === "success" && (
                            <Alert variant="success">{message}</Alert>
                        )}
                    </Col>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type="mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                ></input>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
