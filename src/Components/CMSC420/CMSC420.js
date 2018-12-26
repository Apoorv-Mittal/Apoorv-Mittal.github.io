import React from "react";
import p1 from './p1.pdf';
import p2 from './p2.pdf';
import p3 from './p3.pdf';
import p4 from './p4.pdf';
import p5 from './p5.pdf';
import { PageHeader } from 'react-bootstrap';
 
 const CMSC420 = () =>
     <div className="Article" >
        <PageHeader>
            Data Structures (CMSC420)
        </PageHeader>
        Description, properties, and storage allocation functions of data structures including balanced binary trees, B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees. Algorithms for manipulating structures. Applications from areas such as String Processing, Computer Graphics, Information Retrieval, Computer Networks, Computer Vision, and Operating Systems.

        <div>

        <PageHeader>
            <small style={{color:'white'}}>Project 1 - &nbsp;
                <a href={ p1 }>
                    Heaps and Priority Queues
                </a>
            </small>
        </PageHeader>
        This project is based on implementing Binary (Min-)Heaps and Priority Queues.

        <PageHeader>
            <small style={{color:'white'}}>Project 2 - &nbsp;
                <a href={ p2 }>
                    Threaded AVL Trees
                </a>
            </small>
        </PageHeader>
        This project is based on implementing Threaded Binary and Threaded AVL Trees.


        <PageHeader>
            <small style={{color:'white'}}>Project 3 - &nbsp;
                <a href={ p3 }>
                    Hash Tables
                </a>
            </small>
        </PageHeader>
        This project is based on implementing Hash Tables with linear probing, Quadratic Probing and Separate Chaining as collision methods.

        <PageHeader>
            <small style={{color:'white'}}>Project 4 - &nbsp;
                <a href={ p4 }>
                    Binary Patricia Tries
                </a>
            </small>
        </PageHeader>
        This project is based on implementing Binary Patricia Tries over the binary alphabet (0,1).

        <PageHeader>
            <small style={{color:'white'}}>Project 5 - &nbsp;
                <a href={ p5 }>
                    KD-Trees & PR-QuadTrees
                </a>
            </small>
        </PageHeader>
        This project is based on implementing KD-Trees & PR-QuadTrees and its methods like Range Query, Nearest Neighbour and k-Nearest Neighbour.
        </div>  
             
    </div>;
 
 export default CMSC420;