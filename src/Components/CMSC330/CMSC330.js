import React from "react";
import { PageHeader } from 'react-bootstrap';
 
 const CMSC320 = () =>
     <div className="Article" >
        <PageHeader>
        Organization of Programming Languages (CMSC330)
        </PageHeader>
        A study of programming languages, including their syntax, semantics, and implementation. Several different models of languages are discussed, including dynamic, scripting (e.g., Ruby, Python) functional (e.g., OCaml, Haskell, Scheme), and memory safe systems programming (e.g., Rust). Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security.

        <div>

        <PageHeader>
            <small style={{color:'white'}}>Project 1 - &nbsp;
                <a href='https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p1/README.md'>
                Wordnet
                </a>
            </small>
        </PageHeader>
        This project is based on making a <a href ='https://wordnet.princeton.edu/'>WordNet</a> A basic synopsis is that students were tasked with organizing words and phrases into a graph of hyponyms (more specific synset/word group) and hypernyms (more general synset/word group).

        <PageHeader>
            <small style={{color:'white'}}>
            Project 2A&B - &nbsp;
            <a href = 'https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p2a/README.md'>Ocaml Basics</a>&nbsp;
            and &nbsp;
            <a href = 'https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p2b/README.md'>
            Higher Order Functions
            </a>
            </small>
        </PageHeader>
        These projects introduced students to the fundamentals of Ocaml by having them implement basic mathematical functions, integer and polymorphic binary search trees, and record graphs.

        <PageHeader>
            <small style={{color:'white'}}>
            Project 3A&B - &nbsp;
            <a href = 'https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p3a/README.md'>SmallC Parser</a> &nbsp;
            and &nbsp;
            <a href='https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p3b/README.md'>Interpreter
            </a>
            </small>
        </PageHeader>
        Through the use of an Ocaml parser, lexer, and evaluator, students had to implement an algorithm that would essentially translate a subset of the C programming language into runnable Ocaml code.

        <PageHeader>
            <small style={{color:'white'}}>
            Project 4 - &nbsp; <a href ='https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p4/README.md'>Regular Expression Interpreter</a>
            </small>
        </PageHeader>
        This project tasked students with implementing Nfa and Regexp modules, which implement NFAs and a regular expressions interpreter.

        <PageHeader>
            <small style={{color:'white'}}>
            Project 5 - &nbsp;
            <a href='https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p5/README.md'>Rust</a></small>
        </PageHeader>

        This project introduced students to logical programming through Rust. Basic arithmetic, lists, operational semantics, Ownership, Borrowing, Traits and Lifetimes concepts of Rust were taught through the project. We also had to implement a Binary Search Tree in Rust. 

        <PageHeader>
            <small style={{color:'white'}}>Project 6 - &nbsp;
            <a href='https://github.com/anwarmamat/cmsc330spring18-public/blob/master/p6/README.md'>Introduction to Cybersecurity</a></small>
        </PageHeader>

        The final project of CMSC330 was a basic introduction into writing secure code and SQL querying. The core back-end logic had vulnerabilities and had to be fixed. We were also required to interact with and modify the database, through the database's top-level sqlite3.
        </div>

    </div>;
 
 export default CMSC320;