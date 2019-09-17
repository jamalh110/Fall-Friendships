import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import classes from "./About.module.css";

class About extends React.Component {
  
  render() {
    return (
<div style = {{height:"100%"}}>     
 <Navbar
          history={this.props.history}
          state={this.props.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
      <div className={classes.mainAbout}>
        
        <h1 className = {classes.aboutHeader}>About</h1>
        <br></br>
        <br></br>
        <div className = {classes.aboutText}>
        <p>
        Hey there,

        </p>
<p>
Thank you for taking the time to learn more about us. We’re excited to share a little bit about us with you.
</p>
<p>
Fall Friendship is a deeply personal experience brought to you by the members of Cornell Business Analytics. 
</p>
<p>
During our time at Cornell, we struggled to find like-minded, grounded people to form meaningful relationships and share delightful memories with. Last semester, leading up to Valentine’s Day, we organized Perfect Match and were able to connect 4000+ people across campus. This reaffirmed our belief that a lot of people felt lonely and struggled to meet new people - breaking out of the groups set in place either because of classes or residential dorms. 
</p>

<p>
Our successful experiment with Perfect Match inspired us to dig deeper and dream bigger. We envisioned creating an ecosystem to foster meaningful relations and support smoother integration of everyone at Cornell. 
</p>
<p>
Everyone is welcome at Cornell, it’s simply about finding the right people you can always lean on. Well beyond a simple introduction, a networking event, a bus ride, an exchanged glance. An immersion. All designed around your schedule, your interests, your likes/dislikes, and especially, your personality. 
</p>

<p>
  By taking the survey, our algorithm will match you with 3-4 other students that you statistically have the best shot at becoming close friends with.  
</p>
<p>
So give it a shot! Good things lie ahead :) 
</p>
<p>
In addition to engaging with the community, we do a couple of other cool projects on the side. Learn more about Cornell Business Analytics here and shoot us an email if you’re curious for more! All majors across all experiences are welcome. 
</p>
<p>
With appreciation, <br></br>
Cornell Business Analytics

</p>
<br></br>
<br></br>
<br></br>

        </div>
      </div>
      </div>
    );
  }
}

export default About;
