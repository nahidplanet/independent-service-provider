import React from 'react';
import './Blog.css';
import { AnnotationIcon, ChatIcon, ChipIcon } from '@heroicons/react/solid'


const Blog = () => {
    return (
        <div className='payment mt-3 lg:mt-5'>
            <div className="blog-one md:px-20 px-5 py-5 md:py-14 w-10/12 h-[400x]  border-4 border-yellow-600  rounded-3xl">
                <div className='one'>
                    <div className="question flex ">
                        <div className='w-10 h-10 mr-2 text-white'><span ><AnnotationIcon></AnnotationIcon></span></div>
                        <h1 className='text-2xl font-bold text-white'> What is the difference between authorization and authentication ?</h1>
                    </div>
                    <div className="answer flex  lg:ml-10">
                        <div className='w-6 h-6 mr-2 text-white'><span ><ChatIcon></ChatIcon></span></div>
                        <h1 className='text-lg font-semibold text-white'> Authentication is the of validating that user are whom they claim to be.This is the first step in any security process</h1>
                    </div>
                    <div className="answer flex  lg:ml-10 my-5">
                        <div className='w-6 h-6 mr-2 text-white'><span ><ChatIcon></ChatIcon></span></div>
                        <h1 className='text-lg font-semibold text-white'> Authorization in a system security is the process of giving the user permission to access a specific resource of function</h1>
                    </div>
                    <div className="answer flex  lg:ml-10">
                        <div className='w-6 h-6 mr-2 text-white'><span ><ChatIcon></ChatIcon></span></div>
                        <h1 className='text-lg font-semibold text-white'> Difference Authorization determines the access of the resource that users can use. On the other hand, Authentication determine who the users is. Furthermore, Authorization parameter set, implement and maintain by the organization, however Authentication can be worked through password, one time pins and biometrics information which provided by the users. Hence, Authentication is the first and foremost steps for identity. But Authorization always take place after Authentication. In addition, Authorization isn't visible or changeable by the users, but Authentication is visible or partially changeable by user. Authentication checks credential besides Authorization checks permission. Moreover, both are means of access control of user.</h1>
                    </div>
                </div>


                <div className='two my-5'>
                    <div className="question flex ">
                        <div className='w-10 h-10 mr-2 text-white'><span ><AnnotationIcon></AnnotationIcon></span></div>
                        <h1 className='text-2xl font-bold text-white'> Why are you using firebase? What other options do you have to implement authentication?</h1>
                    </div>
                    <div className="answer flex  lg:ml-10">
                        <div className='w-10 h-10 mr-2 text-white'><span ><ChatIcon></ChatIcon></span></div>
                        <h1 className='text-lg font-semibold text-white'> Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. so that's reason for using firebase.</h1>

                    </div>
                    <div className='lg:ml-14 mt-5'>
                        <h1 className='text-lg font-bold text-white'> A lots of option implement to authentication some Example:</h1>

                        <p className='text-md  font-light text-white'>Parse:- Parse is a complete open-source application stack and backend framework</p>
                        <p className='text-md  font-light text-white'>Back4App:- Back4App is an open source, low code, backend alternative to Firebase</p>
                        <p className='text-md  font-light text-white'>AWS Amplify: AWS is a cloud platform by Amazon that provides a set of tools and services</p>
                        <p className='text-md  font-light text-white'>Kuzzle: Kuzzle is another open source alternative to Firebase that helps you solve several digital needs such as single sign-on, collaboration, messaging, secondary screens, and more.</p>
                        <p className='text-md  font-light text-white'>NativeScript: NativeScript is another open-source platform that you can use to create native mobile apps</p>
                        <p className='text-md  font-light text-white'>RxDB: Reactive Database or RxDB is a real-time NoSQL database for JavaScript apps such as progressive web apps,</p>
                        <p className='text-md  font-light text-white'>Flutter: Flutter is another open-source app development framework but it's part of the Google family of software just like Firebase</p>
                    </div>
                </div>


                <div className='three text-white'>
                    <div className="question flex ">
                        <div className='w-10 h-10 mr-2 text-white'><span ><AnnotationIcon></AnnotationIcon></span></div>
                        <h1 className='text-2xl font-bold text-white'> What other services does firebase provide other than authentication?</h1>
                    </div>
                    <div className="answer flex  lg:ml-10">
                        <div className='w-6 h-6 mr-2 text-white'><span ><ChatIcon></ChatIcon></span></div>
                        <h1 className='text-lg font-bold text-white'> There are many services which Firebase provides, Most useful of them are:
                        </h1>
                    </div>
                    <div className="answer  lg:ml-10">
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Cloud Fire Store</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Cloud Functions</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Hosting</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Google Analytics</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Predictions</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Cloud Messaging</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Dynamic Links</p>
                        </div>
                        <div className='flex '>
                            <ChipIcon className='w-6 h-6 mr-2 '></ChipIcon>
                            <p>Remote Config</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;