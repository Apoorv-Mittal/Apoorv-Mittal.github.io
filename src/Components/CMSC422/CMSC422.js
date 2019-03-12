import React from "react";
import { PageHeader } from 'react-bootstrap';

const CMSC422 = () =>
    <div className="Article" >
        <PageHeader>
        Introduction to Machine Learning (CMSC422) (On going)
        </PageHeader>
        <p>Machine Learning studies representations and algorithms that allow machines to improve their performance on a task from experience. This is a broad overview of existing methods for machine learning and an introduction to adaptive systems in general. Emphasis is given to practical aspects of machine learning and data mining. (Feizi, 422 <a href='http://www.cs.umd.edu/class/spring2019/cmsc422-0101/index.html'>Class Page</a>)</p>

        <div>

        {/* <PageHeader>
            <small style={{color:'white'}}>Project 1 - &nbsp;
                <a href={ p1 }>
                    Auction House
                </a>
            </small>
        </PageHeader>
        <p>In this project I simulated an auction service in which sellers can offer items and bidders can bid on them. In particular, I implemented a class, AuctionServer, in Java that provides methods supporting all aspects of an auction. Because many sellers and bidders will be interacting at the same time, the program was thread-safe.</p>


        <PageHeader>
            <small style={{color:'white'}}>Project 2 - &nbsp;
                <a href={ p2 }>
                    Ratsie’s Simulation
                </a>
            </small>
        </PageHeader>
        <p>In this project, I wrote a simulation for (a highly simplified) Ratsie’s (-like restaurant). The simulation has four parameters: the number of customers wishing to enter Ratsie’s; the number of tables in the restaurant; the number of cooks in the kitchen that fill orders; the capacity of machines in the kitchen used for producing food.</p>


        <PageHeader>
            <small style={{color:'white'}}>Project 3 - &nbsp;
                <a href={ p3 }>
                    Maze Runner!
                </a>
            </small>
        </PageHeader>
        <p>In this project, I wrote an efficient solver for two-dimensional mazes.</p>

        <PageHeader>
            <small style={{color:'white'}}>Project 4 - &nbsp;
                <a href={ p4 }>
                    Distributed Resource Management
                </a>
            </small>
        </PageHeader>
        <p>In this project, I implemented a distributed resource-management scheme using akka actors.</p>

        <PageHeader>
            <small style={{color:'white'}}>Project 5 - &nbsp;
                <a href={ p5 }>
                    Twitter Analyzer
                </a>
            </small>
        </PageHeader>
        <p>In this project I used Hadoop to build a tool for processing sets of Twitter posts (i.e. tweets) and determining which people, tweets, hashtags, and pairs of hashtags are most popular.</p> */}
        

        </div>       
    </div>;

export default CMSC422;