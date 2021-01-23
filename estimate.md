---
title: estimate
image: desertbedrock.jpg
---

<section>
  <h2 class="major"> The Equipment </h2>
  <ul>
    <li>Big CAT</li>
    <li>Little CAT</li>
    <li>Aother CAT</li>
    <li>MiniX</li>
    <li>Harley Road King</li>
    <li>Aother CAT</li>
  </ul>
</section>
<section>
	<h2 class="major">Rates</h2>
	<div class="table-wrapper">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Item One</td>
					<td>Ante turpis integer aliquet porttitor.</td>
					<td>29.99</td>
				</tr>
				<tr>
					<td>Item Two</td>
					<td>Vis ac commodo adipiscing arcu aliquet.</td>
					<td>19.99</td>
				</tr>
				<tr>
					<td>Item Three</td>
					<td> Morbi faucibus arcu accumsan lorem.</td>
					<td>29.99</td>
				</tr>
				<tr>
					<td>Item Four</td>
					<td>Vitae integer tempus condimentum.</td>
					<td>19.99</td>
				</tr>
				<tr>
					<td>Item Five</td>
					<td>Ante turpis integer aliquet porttitor.</td>
					<td>29.99</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"></td>
					<td>100.00</td>
				</tr>
			</tfoot>
		</table>
	</div>
</section>
<section>
    <h2 class="major"> Contact us for a quote </h2>
    <ul style="text-align:center; list-style-type:none;">
      <li class="icon-hp fa-user">&nbsp; Travis Cottam &nbsp;</li>
      <li class="icon-hp fa-phone">&nbsp; (801) 318-7903 &nbsp;</li>
      <li class="icon-hp fa-envelope">&nbsp; traviscottam@gmail.com &nbsp;</li>
      <li class="icon-hp fa-map-pin">&nbsp; Saint George, Utah &nbsp;</li>
    </ul>
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

<p class="copyright" style="text-align:center;"><a href="#">Home</a> | <a href="#estimate">Estimate</a> | <a href="#jobs">Jobs</a> | <a href="#mission">Mission</a> | <a href="#team">Team</a></p>
