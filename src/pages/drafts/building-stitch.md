---
title: Building Stitch
date: "2017-10-25T21:46:45.506Z"
path: "/building-stitch/"
---

*I want to document some of the things that are happening/slowing me down/taking time while I am making this thing.*

### The main problem
I am trying to do many things at once. The biggest thing I am trying to do is build what I am now calling <span class="stitch-title">stitch</span>. The real purpose of stitch is to manage all my threads of work on the various things. It is what I want. I wish I had it to use *while* I build it.

I want to write down some of the journey, and I think I want that to eventually live on a blog, probably this blog, if you are reading this. I had a blog that was a custom React app, but it started getting annoying to maintain. That's something I don't need to do myself (as much) if I use Gatsby, so now I am using Gatsby. There's lots of components to the old blog that still need to be ported over to this one, but I'll do that later.

**Stitch is like a stack trace for your brain.** It's organized into a (flame chart/flame charts){?}. This is really what I need as I am working on multiple tangential projects. The points is to stay focused on one thing at a time, but easily be able to switch between "threads" and trigger recall so it is like I never left. ${revise last sentence}.

The things I am jumping between (my threads)
- Stitch frontend
- Stitch backend (Phoenix App)
  - Learning Elixir
  - Learning Phoenix
- This blog

### The Backend
Originally, I was using a GraphQL backend hosted on [Graphcool](https://graph.cool) for the entirety of my backend, but I decided recently that this was not a well-thought-out decision. 

For one, I had heard about GraphQL as being a breath of fresh air from working with traditional REST APIs. I have maybe once built a traditional REST API, and never done it while knowing really what it was. **I could see the benefit of something like GraphQL if I was working on the frontend totally isolated from the backend**, but that is not the case. It's just me everywhere. I don't reeeallly need to pretend it isn't, at least *not yet*. To be clear, I had a mostly-working MVP with the Graphcool backend. I was starting to get frustrated with the prescribed manner of doing things with `react-apollo`, and I was hacking around the *sugar* it brought, which I knew was not smart for future maintainability. GraphCool and Apollo also seem to be not *that* settled on how they do things, and I want to avoid pieces that could break/be kinda inflexible in the future. I'm sure GraphCool and Apollo are great tools/services if you use them right, but using them right was getting cognitively heavy in my frontend―as I handed more and more work off to services I didn't fully understand, I began losing my grasp on understanding whole applications. Complexity is hard to battle. (revise).

The only general-purpose programming language I really reach for when doing just about everything is JavaScript/Node. Sure I've dabbled in other languages, but if I want to be productive, I'll just use JavaScript. **There are other languages that are debatably more suited for general-purpose stuff than JavaScript, so I wanted to learn one of those.** I had heard a lot about the functional programming hype, and I had heard about Elixir (and Phoenix), so I decided I would also use this project as an opportunity to learn that about that whole world/ecosystem. **A decent drag on my learning has been the lack of extensive Phoenix 1.3 documentation.** Chris McCord and folks are working on updating their canonical(?) Phoenix book, and it is supposed to be ready by the end of this year (2017). Phoenix 1.3 rethinks some concepts―models and contexts―making it harder to kinda base my project off of other projects I've found in the wild. Rabble ramble rabble.

I know that learning another language/ecosystem will make me a better developer because it will expose me to ideas/paradigms/MOs ${sic} that we just don't practice in the JavaScript world. Trying to learn the language fundamentals while also trying to learn my way around the Phoenix Framework is proving difficult. **I am trying.**

<aside>
|- Journal is funny word. -|

🔎etymology of journal🔍
</aside>
Spew words and then tidy.