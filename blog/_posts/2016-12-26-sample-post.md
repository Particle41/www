---
layout: post
title:  "Sample blog page with long title!"
date:   2016-12-26
author: 'Ben Johnson'
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

### Section with image

We can include image in markdown using


{% highlight bash %}
	![Image title.](/path/to/image.jpg)
	or 
	Simmply write html code like
	<img src="/path/to/image.jpg" style="width: 200px; height: 200px;" />
	Or
	can be like 
	![Nice image.](/css/images/temp/photo3.jpg){: height="200" width="200"} 
{% endhighlight %}

![Nice image.](/css/images/temp/photo3.jpg)

![Nice image.](/css/images/temp/photo3.jpg){: style="width: 300px; height: 150px;"} | Now wanted to add some text around the image. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaCon ullamco laboris nisi ut aliquip ex ea commodo consequat.

This text will not be around the image and it will be in the next line of image.
