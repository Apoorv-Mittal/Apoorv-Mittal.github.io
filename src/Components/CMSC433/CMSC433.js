import React from "react";
import p1 from './p1.pdf';
import p2 from './p2.pdf';
import p3 from './p3.pdf';
import p4 from './p4.pdf';
import p5 from './p5.pdf';
import { PageHeader } from 'react-bootstrap';
 
 const CMSC433 = () =>
     <div className="Article" >
        <PageHeader>
        Programming Language Technologies and Paradigms (CMSC433)
        </PageHeader>
        CMSC433 covers principles associated with programming concurrent and distributed software. (Mamat, 433 <a href='http://www.cs.umd.edu/class/spring2018/cmsc433/'>Class Page</a>)

        <div>

        <PageHeader>
            <small style={{color:'white'}}>Project 1 - &nbsp;
                <a href={ p1 }>
                    Auction House
                </a>
            </small>
        </PageHeader>
        In this project I simulated an auction service in which sellers can offer items and bidders can bid on them. In particular, I implemented a class, AuctionServer, in Java that provides methods supporting all aspects of an auction. Because many sellers and bidders will be interacting at the same time, the program was thread-safe.


        <PageHeader>
            <small style={{color:'white'}}>Project 2 - &nbsp;
                <a href={ p2 }>
                    Ratsie’s Simulation
                </a>
            </small>
        </PageHeader>
        In this project, I wrote a simulation for (a highly simplified) Ratsie’s (-like restaurant). The simulation has four parameters: the number of customers wishing to enter Ratsie’s; the number of tables in the restaurant; the number of cooks in the kitchen that fill orders; the capacity of machines in the kitchen used for producing food.


        <PageHeader>
            <small style={{color:'white'}}>Project 3 - &nbsp;
                <a href={ p3 }>
                    Maze Runner!
                </a>
            </small>
        </PageHeader>
        In this project, I wrote an efficient solver for two-dimensional mazes.

        <PageHeader>
            <small style={{color:'white'}}>Project 4 - &nbsp;
                <a href={ p4 }>
                    Distributed Resource Management
                </a>
            </small>
        </PageHeader>
        In this project, I implemented a distributed resource-management scheme using akka actors.

        <PageHeader>
            <small style={{color:'white'}}>Project 5 - &nbsp;
                <a href={ p5 }>
                    Twitter Analyzer
                </a>
            </small>
        </PageHeader>
        In this project I used Hadoop to build a tool for processing sets of Twitter posts (i.e. tweets) and determining which people, tweets, hashtags, and pairs of hashtags are most popular.
        

        </div>       
    </div>;
 
 export default CMSC433;