<h1 class="page-title">Publications
  <span class="page-title-links">[<a href="{{ site.google_scholar }}" rel="noopener">Google Scholar</a>] [<a href="{{ site.dblp }}" rel="noopener">DBLP</a>] [<a href="{{ site.orcid }}" rel="noopener">ORCID</a>]</span>
</h1>

<ol class="publications">
{%- for pub in site.data.publications.main %}
  {%- if pub.doi %}{% assign pub_link = "https://doi.org/" | append: pub.doi %}{% else %}{% assign pub_link = pub.pdf | default: pub.arxiv %}{% endif %}
  {%- assign author_list = pub.authors | split: ", " %}
  <li class="pub">
    <div class="pub-teaser">
      {%- if pub.image %}
      <img src="{{ pub.image | relative_url }}" alt="Figure from {{ pub.title | escape }}" width="200" height="115" loading="lazy" decoding="async">
      {%- else %}
      <div class="pub-teaser-empty" aria-hidden="true">{% include icon.html name="doc" %}</div>
      {%- endif %}
      <span class="pub-venue">{{ pub.conference_short }}{% if pub.year %} {{ pub.year }}{% endif %}</span>
    </div>
    <div class="pub-body">
      <h2 class="pub-title">{% if pub_link %}<a href="{{ pub_link }}" rel="noopener">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</h2>
      <p class="pub-authors">
        {%- for author in author_list -%}
          {%- if site.person.alternate_names contains author or author == site.title -%}
            <span class="me">{{ author }}</span>
          {%- else -%}
            {{ author }}
          {%- endif -%}
          {%- unless forloop.last %}, {% endunless -%}
        {%- endfor -%}
        {%- if pub.et_al %}, et al.{% endif -%}
      </p>
      {%- assign pub_year = pub.year | append: "" %}
      {%- if pub.award %}
      <p class="pub-award">{% include icon.html name="award" %} {{ pub.award }}</p>
      {%- endif %}
      <p class="pub-journal">{{ pub.conference }}{% if pub.year %}{% unless pub.conference contains pub_year %}, {{ pub_year }}{% endunless %}{% endif %}</p>
      <p class="pub-links">
        {%- if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" rel="noopener">DOI</a>{% endif %}
        {%- if pub.pdf %}<a href="{{ pub.pdf }}" rel="noopener">PDF</a>{% endif %}
        {%- if pub.arxiv %}<a href="{{ pub.arxiv }}" rel="noopener">arXiv</a>{% endif %}
        {%- if pub.code %}<a href="{{ pub.code }}" rel="noopener">Code</a>{% endif %}
        {%- if pub.page %}<a href="{{ pub.page }}" rel="noopener">Project Page</a>{% endif %}
        {%- if pub.data %}<a href="{{ pub.data }}" rel="noopener">Dataset</a>{% endif %}
        {%- if pub.bibtex %}<a href="{{ pub.bibtex }}" rel="noopener">BibTeX</a>{% endif %}
        {%- if pub.video %}<a href="{{ pub.video }}" rel="noopener">Video</a>{% endif %}
        {%- if pub.notes %}<span class="pub-note">{{ pub.notes }}</span>{% endif %}
      </p>
    </div>
  </li>
{%- endfor %}
</ol>

<h2 class="section-title" id="patents">Patents</h2>
<ul class="dated-list">
  <li><span class="date">2020</span><span>Apparatus for vehicle classification via inductive loop</span></li>
  <li><span class="date">2020</span><span>Smart robot for cleaning hemispherical cameras</span></li>
  <li><span class="date">2016</span><span>Agricultural robot with variable valve toxin system</span></li>
</ul>
