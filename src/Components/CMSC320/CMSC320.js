import React from "react";
import final from './final.pdf'
import { PageHeader } from 'react-bootstrap';
 
 const CMSC320 = () =>
     <div className="Article" >
        <PageHeader>
            Introduction to Data Science (CMSC320)
        </PageHeader>
        <p>An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and information visualization.(John Dickerson, Prem Saggar, <a href='http://www.cs.umd.edu/class/fall2018/cmsc320/'>CMSC320 Page</a>).</p>

        <div>

        <PageHeader>
            <small style={{color:'white'}}>Project 1 - &nbsp;
                <a href='https://github.com/JohnDickerson/cmsc320-fall2018/tree/master/project1'>
                    Data scraping and cleaning
                </a>
            </small>
        </PageHeader>
        <p>Our first project taught students the skills required to collect and clean data from less than ideal sources. Specifically, we analyzed solar flares with data from a NASA website in which all the data is written on one line of an HTML page.</p>

        <PageHeader>
            <small style={{color:'white'}}>Project 2 - &nbsp;
                <a href='https://github.com/JohnDickerson/cmsc320-fall2018/tree/master/project2'>
                    Wrangling and Exploratory Data Analysis
                </a>
            </small>
        </PageHeader>
        <p>Students were introduced to exploratory data analysis in python by using public baseball data to verify whether the phenomenon depicted in the 2011 movie "Moneyball" was worth the attention.</p>

        <PageHeader>
            <small style={{color:'white'}}>Project 3 - &nbsp;
                <a href='https://github.com/JohnDickerson/cmsc320-fall2018/tree/master/project3'>
                    Regression analysis of Gapminder data and Classification
                </a>
            </small>
        </PageHeader>
        <p>The first half of project 3 provided students more practice with linear regression analyses.
        The second half of project 3 provided students more practice with machine learning algorithms and comparing different classification methods.</p>

        <PageHeader>
            <small style={{color:'white'}}>Project 4 - &nbsp;
                <a href='https://github.com/JohnDickerson/cmsc320-fall2018/tree/master/project4'>
                    Interactive Data Maps
                </a>
            </small>
        </PageHeader>
        <p>This was a fairly simple/short project that introduced students to interactive maps using the leaflet package in python.</p>


        <PageHeader>
            <small style={{color:'white'}}>Project 5 - &nbsp;
                <a href= {final}>
                    Introduction to Data Science Tutorial
                </a>
            </small>
        </PageHeader>
        <p>For our final project, students were tasked with making an Data Science tutorial through the data science pipeline. I chose to do an analysis on New York Taxi Fare. <br/>
        <br/>
        <br/>

        <a href ='https://github.com/Apoorv-Mittal/Predicting-Taxi-Fare'> My submission</a>
        </p>
        </div>       
    </div>;
 
 export default CMSC320;