# Alireza Taheritajar - Academic Website

I am a Ph.D. student in [Computer Science and Cyber Security](https://www.augusta.edu/ccs/) at [Augusta University](https://www.augusta.edu/), where I work as a Graduate Research Assistant at the [ARVR Lab](https://www.jeoresearch.com/ccslab) under the supervision of [Dr. Jason Orlosky](https://www.jeoresearch.com/research) and [Dr. Jieqiong Zhao](https://jieqiongzhao.github.io/). My research focuses on the intersection of **computer vision**, **artificial intelligence**, and **mixed reality**, with an emphasis on **incremental learning** and **real-time 3D object understanding** for XR systems.  

I received my **M.Sc.** and **B.Sc.** degrees in **Electrical and Control Engineering** from [Bu-Ali Sina University](https://basu.ac.ir/en) in Hamedan, Iran, where I graduated as a top student. My master’s thesis focused on **vehicle counting and speed detection using computer vision**, and my undergraduate project involved designing a **camera robot** for real-time visual tracking.   

My biography is [here](https://taheritajar.net/biography/).

## Adding gallery photos

The gallery is at `/gallery/`. Put a photo in `assets/gallery/`, then add an
entry to `_data/gallery.yml` (entries appear in file order):

```yaml
- image: my-photo.jpg
  description: "A short caption for the photo."
  width: 1200
  height: 900
```

Use the image's actual pixel dimensions. Optionally add `alt` with a description
of the scene for screen readers. Captions are plain text.

For fast loading, use an optimized JPEG or WebP around 800 pixels wide. To keep
a larger original available on click, put a smaller copy in
`assets/gallery/previews/` and add `preview: previews/my-photo.jpg`; in that case,
set `width` and `height` to the preview's dimensions. The existing photos use
this approach. Images load lazily, and the gallery needs no JavaScript or
external libraries.
