# Construction-Ecommerce-Frontend


<h1>Status: Finished with interface a user should land on upon logging in. (8/23/21)</h1>
<h2>MERN + ASP.Net Core Entity Framework</h2>
<p>
In creating this MERN/ASP.Net Core Entity Framework app, I'm combining the cloud service 
capabilities that Mongo DB offers, along with the server side capabilities that I've created for 
using this application as a business owner. To start off, I created the backend server with 
ASP.NET Core Entity Framework, and then I moved on to creating a frontend with MERN mindset.
</p>

<br><br>

<p>
My plan is to incorporate the backend framework that I made within ASP.NET Core Entity Framework 
alongside MongoDB's cloud service capabilities. Currently, I'm following a tutorial series 
by YouTube channel: JavaScript Mastery. I will leave links at the end of this ReadMe in case 
you ever want to build a full-stack web app with just MongoDB and not ASP.Net. I'm eternally 
grateful for the open source community, especially since I did not want to reinvent the wheel 
and create an ecommerce applicationfrom scratch.
</p>

<br><br>

<p>
Although the tutorial series is meant to simplify creating a MERN web app, I found it empowering 
to be able to go through each tutorial (5-part, one to ~two hours each), and fixing any bugs 
that I had that the tutorial did not showcase due to the creator of the series not having the 
things set up the exact same way that I did. The series provides a template to what is possible, 
and this application is geared towards ecommerce within the construction community.
</p>

<br><br>

To run the app, at this present time (without deploying it using Netlify), you would have to do:
<p>
    <ol>
        <li>Open the app in VS Code after cloning the repo to your local server.</li>
        <li>
            Open up two terminals inside of VS Code:<br><br>
            <ol>
                <li>One is for your server.</li>
                <li>'cd' into server folder by entering 'cd server'</li>
                <li>One is for your client folder.</li>
                <li>'cd' into your client folder by entering 'cd client'</li>
            </ol>
        </li>
        <li>Run the client and server at the same time by entering 'npm start' in both node shells.</li>
        <li>If you get any errors, you may have to download the dependencies necessary for it to run.</li>
        <li>
            That's it for now. I'm going to attempt to deploy this app using Netlify here soon so that<br>
            People viewing the app, or wanting to test it's features, don't have to go through the process<br>
            of cloning the app onto their computer and attempting to run the server on their computer.
        </li>
    </ol>
</p>

<br><br>

<p>
That being said, here are some things that I want to annotate about the steps towards creating new
paths/routes within a React + Redux setup in my web app ( so far ). 
<p>

<br><br>

<h2>Mongo DB, Express (npm), React + Redux, NodeJS (npm) [MERN]</h2>
<ol>
    <li>
        Backend Server (folder within frontend app called 'server')<br>
        <ol>
            <li>
                server/routes/posts.js: <br>
                Add a router. (i.e. -> 'router.[typeOfRequest: get, post, patch, delete]('/');<br> 
                You can include path names to different routes here.
            </li>
            <li>
                server/routes/posts.js: <br>
                Import via destructor the method controllers from controllers folder.
            </li>
            <li>
                server/controllers/posts.js: <br>
                Create the method (how it will handle the info being sent to the backend server <br>
                within React app), make sure to <bold>export default router;</bold> at the end <br>
                of the file.
            </li>
        </ol>
    </li>
    <li>
        Frontend (folder within frontend app called 'client')<br>
        <ol>
            <li>
                client/src/api/index.js:<br>
                Move to the frontend, api folder and add an api call to the index.js file.
            </li>
            <li>
                client/src/actions/posts.js:<br>
                client/src/constants/actionTypes.js:<br>
                Then move to the actions folder and add the appropriate actions. <br><br>
                <bold>Note: </bold>If you are using a constants folder, make sure <br>
                to add the constant types into there as well.
            </li>
            <li>
                client/src/reducers/posts.js:<br>
                Implement logic within reducers folder regarding what the the frontend <br>
                should show to the client when this api call is made. <br>
            </li>
            <li>
                client/src/components/YourComponent/yourComponent.js:<br>
                Implement your api call using the tools at your disposal from React + Redux <br>
                and Axios.
            </li>
        </ol>
    </li>
</ol>

<br><br>

<hr>

<h2>MERN Notes:<h2>
<p>
Make sure that you're server/routes/posts.js and client/api/index.js have the same looking <br>
paths. For instance, both the following path names should match: 
<p>

<p>
server/routes/post.js<br>
router.patch('/:id/like', likePost');
</p>

<p>
client/api/index.js<br>
export const likePost = (id) => axios.patch(`${url}/${id}/like`);
</p>

<br>

<p>
Notice how the file paths are: [baseurl]/{id}/like
This will cause a Network error if both are not the same.
</p>

<h1>Status: Start of Frontend Development (8/20/21) </h1>
<p>Currently, the web app is working off of the tutorial series "Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB" My 
  goal is to use the tools that I learn from this tutorial series, along with what I've learned from my time at DevCodeCamp, to create a powerful, scalable 
  web app for construction ecommerce businesses.
</p>
<br>
<p>The reason I decided to use the YouTube video to help me start this project is because the creator is an active member of the GitHub community. He believes 
  in open source development, and I really appreciate that mindset. As an aspiring software developer, I've always found myself thinking that I'm going to
  create something that no one has ever seen before. More than 90% of the time, it's been built already (several times). So, that's where I'm at.
</p>
<br>
<p>Once I finish with the project, I'll be deploying the versions of it via Netlify, and hopefully I can make something that's worth a second look! Here is the
  YouTube series if you want to try it out for yourself. Shouts out to my man Adrian (JavaScript Mastery) for posting it: <br> 
  https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu <br>
</p>
<img src="https://user-images.githubusercontent.com/62074841/130332942-466ef0b8-0a79-4be8-be9f-ab34eb1a9252.png" />