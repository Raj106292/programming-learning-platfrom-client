import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Card className='p-2 mb-3 bg-dark text-white'>
                <Card.Body>
                    <Card.Title>1. What is cors?</Card.Title>
                    <Card.Text>
                        CORS(Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='p-2 mb-3 bg-light text-dark'>
                <Card.Body>
                    <Card.Title>2. Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world. For this reason, I am using firebase.
                        <ul>The other options I can use to implement authentication:
                            <li>MongoDB.</li>
                            <li>Oracle Database.</li>
                            <li>Amazon Redshift.</li>
                            <li>Redis Enterprise Cloud.</li>
                            <li>Cloudera Enterprise Data Hub.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='p-2 mb-3 bg-dark text-white'>
                <Card.Body>
                    <Card.Title>3. How does the private route work?</Card.Title>
                    <Card.Text>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='p-2 mb-3 bg-light text-dark'>
                <Card.Body>
                    <Card.Title>4. What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        <p>
                            Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
                        </p>
                        <br />
                        <p>
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;