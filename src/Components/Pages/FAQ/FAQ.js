import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className='bg-dark text-white'>
                <Accordion.Header>1. What are the 5 basic concepts of programming language?</Accordion.Header>
                <Accordion.Body>
                    The 5 Basic Coding Concepts:
                    <ul>
                        <li>Variables. As the foundation of any computer programming language, variables act as “containers” that “hold” information.</li>
                        <li>Data Structures. Data structures allow programmers to streamline data collection when a large amount of related information is involved.</li>
                        <li>Control Structures.</li>
                        <li>Syntax.</li>
                        <li>Tools.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='bg-dark text-white'>
                <Accordion.Header>2. What are data types in programming?</Accordion.Header>
                <Accordion.Body>
                    A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='bg-dark text-white'>
                <Accordion.Header>3. Which is the No 1 programming language?</Accordion.Header>
                <Accordion.Body>
                    JavaScript and Python, two of the most popular languages in the startup industry, are in high demand. Most startups use Python-based backend frameworks such as Django (Python), Flask (Python), and NodeJS (JavaScript). These languages are also considered to be the best programming languages to learn for beginners.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='bg-dark text-white'>
                <Accordion.Header>4. What is a string in code?</Accordion.Header>
                <Accordion.Body>
                    Most programming languages have a data type called a string, which is used for data values that are made up of ordered sequences of characters, such as "hello world". A string can contain any sequence of characters, visible or invisible, and characters may be repeated.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='bg-dark text-white'>
                <Accordion.Header>5. What is the difference between programming and coding?</Accordion.Header>
                <Accordion.Body>
                    Coding is a part of programming that deals with writing codes that a machine can understand. Programming is a process that creates programs that involve the ratification of codes. Coding requires basic knowledge of programming skills without any software tools.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className='bg-dark text-white'>
                <Accordion.Header>6. What is a variable in coding?</Accordion.Header>
                <Accordion.Body>                   
                    In programming, a variable is a value that can change, depending on conditions or on information passed to the program. Typically, a program consists of instruction s that tell the computer what to do and data that the program uses when it is running.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;