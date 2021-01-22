---
title: contact
image: desertbedrock.jpg
---

<section>
	<ul class="alt" style="text-align:center;">
		<li><span class="icon fa-user">&nbsp; &nbsp; Travis Cottam</span></li>
		<li><span class="icon fa-phone">&nbsp; &nbsp; (801) 318-7903</span></li>
		<li><span class="icon fa-envelope">&nbsp; &nbsp; traviscottam@gmail.com</span></li>
		<li><span class="icon fa-map-pin">&nbsp; &nbsp; Saint George, Utah</span></li>
	</ul>
</section>
<section>
    <h3> Send us a message for a quote </h3>

    <form action="https://formspree.io/{{ site.email }}" method="POST">
    	<div class="fields">
    		<div class="field half first">
    			<label for="name">Name</label>
    			<input type="text" name="name" id="name" />
    		</div>
    		<div class="field half">
    			<label for="email">Email</label>
    			<input type="text" name="_replyto" id="email" />
    		</div>
    		<div class="field">
    			<label for="message">Message</label>
    			<textarea name="message" id="message" rows="4"></textarea>
    		</div>
    	</div>
    	<ul class="actions">
    		<li><input type="submit" value="Send Message" class="primary" /></li>
    		<li><input type="reset" value="Reset" /></li>
    	</ul>
    </form>

</section>
<section>
    <h3> Follow us on social </h3>

    <ul class="icons">

        {% if site.twitter_url %}
        			<li><a href="{{ site.twitter_url }}" class="icon fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
        			{% endif %}
        			{% if site.googleplus_url %}
        			<li><a href="{{ site.googleplus_url }}" class="icon fa-google-plus" target="_blank"><span class="label">Google+</span></a></li>
        			{% endif %}
        			{% if site.facebook_url %}
        			<li><a href="{{ site.facebook_url }}" class="icon fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>
        			{% endif %}
        			{% if site.instagram_url %}
        			<li><a href="{{ site.instagram_url }}" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
        			{% endif %}
        			{% if site.pinterest_url %}
        			<li><a href="{{ site.pinterest_url }}" class="icon fa-pinterest" target="_blank"><span class="label">Pinterest</span></a></li>
        			{% endif %}
        			{% if site.gitlab_url %}
        			<li><a href="{{ site.gitlab_url }}" class="icon fa-gitlab" target="_blank"><span class="label">GitLab</span></a></li>
        			{% endif %}
        			{% if site.github_url %}
        			<li><a href="{{ site.github_url }}" class="icon fa-github" target="_blank"><span class="label">GitHub</span></a></li>
        			{% endif %}
        			{% if site.slack_url %}
        			<li><a href="{{ site.slack_url }}" class="icon fa-slack" target="_blank"><span class="label">Slack</span></a></li>
        			{% endif %}
        			{% if site.linkedin_url %}
        			<li><a href="{{ site.linkedin_url }}" class="icon fa-linkedin" target="_blank"><span class="label">LinkedIn</span></a></li>
        			{% endif %}

    </ul>

</section>

<!-- Footlinks -->

<p class="copyright" style="text-align:center;"><a href="#">Home</a> | <a href="#contact">Contact</a> | <a href="#mission">Mission</a> | <a href="#team">Team</a> | <a href="#work">Work</a></p>
