---
layout: post
title:  "How to add blog post for Particle41?"
date:   2017-01-06
author_github: hiteshrawal
description: "Write a blog and publish on particle41 website using jekyll."
---

We are using Jekyll to build our static blog contents. If you wish to know more about Jekyll and want to explore it in details, then please visit its [official site](http://jekyllrb.com/docs/home/) it has good documentation. 
To publish a blog post we just have to follow three simple steps.
* Write a blog.
* Build Jekyll.
* Publish to website.

### Write a blog
These are the following thing which you have to know before adding or writing a blog.

#### __A) Create Markdown file.__
To start writing a blog you have to create a markdown(.md) file in `_post` directory. This is important that the file name should be in the following format only.

`YEAR-MONTH-DAY-title.md`
	for eg: 
`2017-01-06-how-to-add-post.md`

While writing a blog we have to keep in mind that this is the markdown file, so we have to follow markdown syntaxes. So that our contents or thoughts which we want to represent can appear properly.
There are lots of content available on the internet about markdown syntax. Here I am adding one link for [quick reference](http://daringfireball.net/projects/markdown/syntax/).

#### __B) Add front matter.__
The front matter is very important part of the blog, It has to placed at top of the file. Front matter includes some necessary information about the article like 'layout', 'title', 'date', 'description' etc.

Here is an example of front matter.
{% highlight bash %}
---
layout: post
title:  "How to add blog post for Particle41?"
date:   2017-01-06
author_github: hiteshrawal
description: "Write a blog and publish on particle41 website using jekyll."
---
{% endhighlight %}

#### __C) Highlighting code.__
Code highlighting can be possible via two ways 'inline code' or 'highlight block'. If we want to highlight a code, in any specific language then 'highlight block' will be more useful. Here is how to get code highlighting to work.

{% highlight bash %}
{% raw %}
	{% highlight ruby %}
	class Node
	 def initialize(value)
	  @value = value
	 end
	end
	{% endhighlight %}
{% endraw %}
{% endhighlight %}

In that above case replace 'ruby' with 'javascript' or whatever language we are highlighting. Complete list of languages is available [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers/).

There may be a case where we want to highlight a specific word or a sentence then we can simply use back ticks(`). Wrap the text into back ticks and it will highlight.

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
