---
layout: post
title:  "How to add blog post for Particle41?"
date:   2017-01-06
author_github: hiteshrawal
description: "Write a blog and publish on particle41 website using jekyll."
---

We are using Jekyll to build our static blog contents. If you wish to know more about Jekyll and want to explore it in details, then please visit its [official site](http://jekyllrb.com/docs/home/) it has good documentation. 
To publish a blog post we just have to follow three simple steps.
* Write a blog
* Build Jekyll
* Publish to website

### Write a blog
To start writing a blog you have to create a markdown(.md) file in `_post` directory. This is important that the file name should be in the following format only.

`YEAR-MONTH-DAY-title.md`
	for eg: 
`2017-01-06-how-to-add-post.md`

While writing a blog we have to keep in mind that this is the markdown file, so we have to follow markdown syntaxes. So that our contents or thoughts which we want to represent can appear properly.
There are lots of content available on the internet about markdown syntax. Here I am adding one link for [quick reference](http://daringfireball.net/projects/markdown/syntax/).

### Build Jekyll
Once the content is ready, then we have to do `jekyll build` it will generate HTML files of our post. Make sure you will run this command from `_blog` directory.

{% highlight bash %}
	$ cd ./blog
	$ jekyll build
{% endhighlight %}

### Publish to website
Now all set and we want to publish this post, so we have to go to root directory i.e. `www` and execute gulp recipe.

{% highlight bash %}
	$ cd www
	$ gulp blog:publish
{% endhighlight %}
